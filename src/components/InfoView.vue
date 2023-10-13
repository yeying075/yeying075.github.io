<script lang="ts" setup>
import {computed, ref, onMounted} from 'vue'
import { ElMessage } from 'element-plus'
import {shallowEqual} from "bizcharts/es/utils";
import PersonDialog from "@/components/PersonDialog.vue";
import {getCurrentInstance} from "vue";
import router from "@/router";

interface User {
  date: object
  name: string
  sex: string
  authenticity: string
}
interface UserTemp {
  date?: object
  name: string
  sex: string
  authenticity: string
}

const { proxy } : any = getCurrentInstance()

const search = ref('')

const filterTableData = computed(() => {
  let d = proxy.$tableData.value.filter(
      (data : User) =>
          !search.value ||
          data.name.toLowerCase().includes(search.value.toLowerCase())
  )
  return d.sort((a : User, b : User) => {
    return a.date > b.date ? -1 : 1
  })
})

const dialogVisible = ref(false)
const dialogVisible2 = ref(false)

const handleEdit = (row : User) => {
  proxy.$datax.value = row
  router.push('/data')
}

let row_temp : UserTemp = {
  date: undefined,
  name: '',
  sex: '',
  authenticity: ''
}
const handleDelete = (row: User) => {
  row_temp = row
  dialogVisible.value = true
}
const dialogDelete = () => {
  for (let i = 0; i < proxy.$tableData.value.length; i ++) {
    if (shallowEqual(proxy.$tableData.value[i], row_temp)) {
      proxy.$tableData.value.splice(i, 1)
      break
    }
  }
  ElMessage({
    message: '删除成功',
    type: "success",
    grouping: false

  })
  dialogVisible.value = false
}

const currentPage = ref(1)
const totalPage = computed(() =>
    filterTableData.value.length
)
const showTableData = computed(() =>
    filterTableData.value.slice((currentPage.value - 1) * 14, currentPage.value * 14)
)

</script>

<template>
  <div class="block">
    <PersonDialog v-model:dialogVisible="dialogVisible2"/>

    <el-table :data="showTableData" table-layout="auto" style="width: 100%">
      <el-table-column label="日期">
        <template #default="scope">
          <el-text>{{scope.row.date.format('YYYY/MM/DD')}}</el-text>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="姓名"/>
      <el-table-column prop="sex" label="性别"/>
      <el-table-column prop="authenticity" label="可信度" />
      <el-table-column align="right">
        <template #header>
          <el-row justify="end" class="colRight">
            <el-col :span="12">
              <el-input class="input-right" v-model="search" size="small" placeholder="姓名查询" />
            </el-col>
            <el-col :span="6">
              <el-button size="default" style="width: 108px" type="primary" @click="dialogVisible2 = true">上传人员信息</el-button>
            </el-col>
          </el-row>
        </template>
        <template #default="scope">
          <el-button
              size="small"
              type="primary"
              @click="handleEdit(scope.row)"
          >分析</el-button>
          <el-button
              class="colRight"
              size="small"
              type="danger"
              @click="handleDelete(scope.row)"
          >删除</el-button>
        </template>

      </el-table-column>
    </el-table>
    <div class="pagination-block">
      <el-pagination
          pager-count="15"
          :page-size="14"
          :total="totalPage"
          background
          layout="prev, pager, next, jumper"
          v-model:current-page="currentPage"
      />
    </div>
  </div>
  <div class="dialog-block">
    <el-dialog
        v-model="dialogVisible"
        title="删除信息"
        width="30%"
        align-center
    >
      <span>确定删除该条信息？</span>
      <template #footer>
      <span class="dialog-footer">
        <el-button size="large" @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" size="large" @click="dialogDelete">
          确定
        </el-button>
      </span>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped>
.block{
  //display: block;
  //align-items: center;
  //justify-content: center;
}
.input-right{
  padding-right: 20px;
}
.colRight{
  margin-right: 20px;
}
.pagination-block{
  display: flex;
//align-items: ;
  justify-content: center;
  margin-top: 40px;
//margin-right: 100px;

}
.dialog-block{
  text-align: left;
}
</style>