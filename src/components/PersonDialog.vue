<script setup lang="ts">
import {ElMessage} from "element-plus";
import {ref, toRef, defineProps, defineEmits, computed} from "vue";
import {getCurrentInstance} from "vue";
import dayjs from "dayjs";

const { proxy } : any = getCurrentInstance()

const props = defineProps({
  dialogVisible: Boolean
})
const emits = defineEmits([
    'update:dialogVisible',
])

const dialogVisible = toRef(props, "dialogVisible")

interface User {
  date: object
  name: string
  sex: string
  authenticity: string
}

const dateOrigin = ref(new Date())

const form = ref<User>({
  date: computed(() =>
      dayjs(dateOrigin.value)
  ),
  name: '',
  sex: '',
  authenticity: '......'
})
const onSubmit = () => {
  let formTemp = {}
  Object.assign(formTemp, form.value)
  proxy.$Bus.emit('update:tableData', formTemp)
  emits('update:dialogVisible', false)
  ElMessage({
    message: JSON.stringify(dialogVisible.value),
    type: "success",
    grouping: false

  })
}

</script>

<template>
  <div class="dialog-block">
    <el-dialog
        v-model="dialogVisible"
        title="上传人员信息"
        width="40%"
    >
<!--      align-center-->

      <el-form :model="form" label-width="120px">
        <el-form-item label="姓名">
          <el-input v-model="form.name" style="width: 40%"/>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="form.sex" placeholder="选择" style="width: 40%">
            <el-option label="男" value="男"/>
            <el-option label="女" value="女"/>
          </el-select>
        </el-form-item>
        <el-form-item label="日期">
          <el-date-picker
              v-model="dateOrigin"
              type="date"
              placeholder="选择日期"
              style="width: 40%"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button @click="$emit('update:dialogVisible', false)">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<style scoped>
.dialog-block{
  text-align: left;
}

</style>