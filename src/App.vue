<template>
  <div id="app">
    <el-container style="height: 100%">
      <el-header height="75px"><common-header></common-header></el-header>
      <el-container>
        <el-aside width="200px"><common-aside></common-aside></el-aside>
        <el-container>
          <el-header height="40px">
            <bread-crumb></bread-crumb>
          </el-header>
          <el-main><router-view /></el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonHeader from "@/components/CommonHeader";
import CommonAside from "@/components/CommonAside";
import BreadCrumb from "@/components/BreadCrumb";
export default {
  components: {
    CommonHeader,
    CommonAside,
    BreadCrumb
  }
};
</script>

<style lang="scss">
#app {
  height: 100vh;
}
</style>
