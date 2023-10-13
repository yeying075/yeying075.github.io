<script lang="ts" setup>
import PersonDialog from "@/components/PersonDialog.vue";
import {onMounted, ref, computed, getCurrentInstance, toRefs, watch, toRef} from "vue";
import * as echarts from 'echarts';
import ChartView from "@/components/ChartView.vue";

import {
  Iphone,
  User,
} from '@element-plus/icons-vue'

const dialogVisible = ref(false)

const {proxy} : any = getCurrentInstance()

onMounted(() => {
  // alert(proxy.$router.currentRoute.value.path)
  // alert(proxy.$datax.value.date)
})

</script>

<template>
  <div class="block">
    <el-row class="rowChart" :gutter="0">
      <el-col :span="1"></el-col>
      <el-col class="colChart" :span="11">
        <ChartView/>
      </el-col>
<!--      <el-col :span="1"></el-col>-->
      <el-col class="colPeople" :span="12">
        <div class="blockPeople">

        <el-descriptions
            class="descriptionPeople"
            :column="2"
            size="large"
            border
            direction="vertical"
        >
          <template #title>
            <el-text class="textPeople" type="primary" size="large">
              人员信息
            </el-text>
          </template>
          <template #extra>
            <el-button class="buttonPeople" size="large" type="primary" @click="dialogVisible = true">上传人员信息</el-button>
          </template>
          <el-descriptions-item :span="2">
            <template #label>
              <div class="cell-item">
                <el-icon>
                  <location />
                </el-icon>
                日期
              </div>
            </template>
            {{ $datax.value.date.format('YYYY/MM/DD') }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                <el-icon>
                  <user />
                </el-icon>
                姓名
              </div>
            </template>
            {{ $datax.value.name }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                <el-icon>
                  <iphone />
                </el-icon>
                性别
              </div>
            </template>
            {{ $datax.value.sex }}
          </el-descriptions-item>
        </el-descriptions>
        </div>
      </el-col>
    </el-row>

    <PersonDialog v-model:dialogVisible="dialogVisible"/>
  </div>
</template>

<style scoped>
  #chart{
    height: 600px;
    width: 600px;
  }
  .block{
    height: 100%;
    width: 100%;
  }
  .rowChart{
    height: 100%;
  }
  .colChart{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .colPeople{
  //height: 100%;
  //width: 100%;
  //display: flex;
  //justify-content: center;
  //align-items: center;
  }
  .blockPeople{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    //align-items: center;
  }
  .descriptionPeople{
    //height: 90%;
    width: 85%;
    margin-top: 30%;
  }
  .textPeople{
    margin-left: 15px;
  }
  .buttonPeople{
    margin-right: 10px;
  }
</style>