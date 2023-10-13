<script setup>
import {ref} from "vue";

const hmw = ref([
  'HMW1.jpg',
  'HMW2.jpg',
  'HMW3.jpg',
])
</script>

<template>
  <div class="block text-center">
    <el-carousel height="710px" style="width: 540px">
      <el-carousel-item v-for="item in hmw" :key="item">
        <el-image style="height: 710px; width: 540px" :src="item"/>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped>
.block{
  //height: 100%;
  display: flex;
  justify-content: center;
}
.demonstration {
  color: var(--el-text-color-secondary);
}
.el-carousel{

}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>