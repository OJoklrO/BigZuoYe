<template>
  <div class="banner">
    <div class="header">
      <!-- 搜索 -->
      <form-line-lab></form-line-lab>
    </div>
    <!-- 分割线 -->
    <el-divider content-position="left" style="margin: 50px 0;" class="line"
      >实验管理</el-divider
    >
    <!-- 显示 -->
    <!-- <div class="lab_tag">
      <div class="labcard">
        <span class="lab_text" style="color:rgb(144,147,153);">实验学期</span>
        <div class="bor"></div>
      </div>
      <div class="labcard">
        <span class="lab_text" style="color:rgb(144,147,153);">实验总人数</span>
        <div class="bor"></div>
      </div>
    </div> -->
    <!-- 表格 -->
    <my-table-lab></my-table-lab>
    <!-- 按钮 -->
    <el-button round class="add_button">
      <i class="el-icon-plus"></i>
      添加
    </el-button>
    <!-- <el-button round class="dele_button">
      <i class="el-icon-edit"></i>
      编辑
    </el-button> -->
  </div>
</template>

<script>
import MyTableLab from "@/components/MyTableLab";
import FormLineLab from "@/components/FormLineLab";
export default {
  beforeMount() {
    this.$store.commit("SetExperiment", []);
    this.freshCourse();
  },
  methods: {
    freshCourse() {
      this.$http
        .post("http://182.92.122.205:8080/", "gettable=course")
        .then(res => {
          var str = res.data;
          console.log(res.data);
          str = str.replace(/'/g, '"');
          var result = JSON.parse(str);
          this.$store.commit("SetCourseArray", result);
          // var res1=JSON.parse(str)
          // console.log(res1)
          //var str1 = unescape(str.replace(/\\u/g, "%u"));
        });
    }
  },
  components: {
    MyTableLab,
    FormLineLab
  }
};
</script>

<style lang="scss" scoped>
.lab_tag {
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 30px 0;
}
.labcard {
  // background-color: red;
  display: flex;
}
.bor {
  width: 150px;
  height: 30px;
  // background-color: aqua;
  border: 1px solid #ebeef5;
  margin-left: 40px;
  border-radius: 4px;
}
.add_button,
.edit_button {
  margin-top: 40px;
}
.add_button {
  // margin-left: 500px;
  margin-right: 300px;
}
</style>
