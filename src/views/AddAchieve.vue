<template>
  <div class="banner">
    <div class="header">
      <!-- 标题 -->
      <!-- <div class="query_title">成绩录入</div> -->
      <!-- 搜索 -->
      <form-line-query></form-line-query>
    </div>

    <!-- 表格 -->
    <student-table></student-table>
    <!-- 按钮 -->
    <!-- <el-button round class="add_button">
      <i class="el-icon-plus"></i>
      添加
    </el-button>
    <el-button round class="edit_button">
      <i class="el-icon-edit"></i>
      编辑
    </el-button> -->
    <!-- 弹出框 -->
  </div>
</template>

<script>
import StudentTable from "@/components/StudentTable";
import FormLineQuery from "@/components/FormLineQuery";
export default {
  components: {
    StudentTable,
    FormLineQuery
  }
};
</script>

<style lang="scss" scoped>
.line {
  margin-bottom: 50px;
}
.add_button,
.edit_button {
  margin-top: 40px;
}
.add_button {
  margin-left: 300px;
  margin-right: 300px;
}
.query_title {
  font-weight: bolder;
  font-size: 30px;
  text-align: center;
  color: rgb(144, 147, 153);
  margin-bottom: 30px;
}
</style>
