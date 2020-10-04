<template>
  <div class="banner">
    <div class="header">
      <!-- 搜索 -->
      <form-line-room></form-line-room>
    </div>
    <el-divider content-position="left" style="margin: 50px 0;" class="line">实验室信息</el-divider>
    <!-- 表格 -->
    <my-table-room></my-table-room>
    <!-- 按钮 -->
    <el-button round class="add_button">
      <i class="el-icon-plus"></i>
      添加
    </el-button>
    <el-button round class="edit_button">
      <i class="el-icon-edit"></i>
      编辑
    </el-button>
  </div>
</template>

<script>
import MyTableRoom from "@/components/MyTableRoom";
import FormLineRoom from "@/components/FormLineRoom";
export default {
components: {
    MyTableRoom,
    FormLineRoom
  }
};
</script>

<style lang="scss" scoped>
.line{
  margin-bottom: 50px;
}
.add_button,.edit_button{
  margin-top: 40px;
}
.add_button{
  margin-left: 300px;
  margin-right: 300px;
}
</style>
