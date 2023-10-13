<script setup>
import {
  // Document,
  Menu as IconMenu,
  // Location,
  Setting,
} from '@element-plus/icons-vue'

// const handleOpen = function () {
//
// }
// const handleClose = function () {
//
// }

// const handleClose = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
// }
</script>

<template>
  <div class="common-layout">
    <el-container class="container">
      <el-aside id="aside">
        <el-col :span="50">
          <div id="IFI_div">
            <h1 id="IFI">IFI</h1>
          </div>

          <el-menu
              :default-active="$router.currentRoute.value.path"
              class="menu"
              @open="handleOpen"
              @close="handleClose"
              router
              background-color="#222d3c"
              text-color="#dce0e5"
          >
            <el-menu-item class="menu-item" index="/home">
              <el-icon><location /></el-icon>
              <span>欢迎</span>
            </el-menu-item>
            <el-menu-item class="menu-item" index="/data">
              <el-icon><document /></el-icon>
              <span>数据分析</span>
            </el-menu-item>
            <el-menu-item class="menu-item" index="/info">
              <el-icon><icon-menu /></el-icon>
              <span>人员信息</span>
            </el-menu-item>
            <el-menu-item class="menu-item" index="/set">
              <el-icon><setting /></el-icon>
              <span>系统设置</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-aside>
      <el-container>
        <el-header id="header">侦查讯问智能感知系统</el-header>
        <el-main id="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.common-layout{
  height: 100%;
  width: 100%;

}
.container{
  height: 100%;
  width: 100%;
//border: 1px solid #222d3c;
}
#header{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #dcdfe6;
  height: 80px;
  font-size: 24px;
}
#aside{
  border: 1px solid #222d3c;
  width: 200px;
  //padding-top: 100px;
  background-color: #334054;
}
#main{
  border: 1px solid #dcdfe6;
  padding: 0;
  height: 100%;
  width: 100%;
}
.menu{
  border-right: 0;
}
#IFI_div{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 79px;
  background-color: #334054;
  color: #dce0e5;
  font-size: 20px;
//height: 80px;
//width: 180px

}
.menu-item{
  height: 70px;
  font-size: 18px;
  //border: 1px solid #222d3c;

}
</style>