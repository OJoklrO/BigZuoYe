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
    <el-button round class="add_button" @click="addExp">
      <i class="el-icon-plus"></i>
      添加
    </el-button>
    <!-- <el-button round class="dele_button">
      <i class="el-icon-edit"></i>
      编辑
    </el-button> -->
    <el-dialog title="编辑实验" :visible.sync="dialogVisible">
      <el-form @submit.native.prevent>
        <el-form-item label="实验名称" :label-width="formLabelWidth">
          <el-input v-model="message.exp_name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="实验编号" :label-width="formLabelWidth">
          <el-input v-model="message.exp_id" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="实验时间" :label-width="formLabelWidth">
          <el-input v-model="message.time" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="实验室" :label-width="formLabelWidth">
          <el-input v-model="message.room" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="实验员" :label-width="formLabelWidth">
          <el-input v-model="message.exp_tc" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="实验人数" :label-width="formLabelWidth">
          <el-input v-model="message.num" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="edit_form">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import MyTableLab from "@/components/MyTableLab";
import FormLineLab from "@/components/FormLineLab";
import { mapState } from "vuex";

export default {
  beforeMount() {
    this.$store.commit("SetExperiment", []);
    this.freshCourse();
  },
  computed: {
    ...mapState({
      currentCourse: state => state.course.currentCourse
    })
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
    },
    addExp() {
      this.message = {};
      this.dialogVisible = true;
    },
    edit_form() {
      this.$store.commit("AddExperiment", this.message);
      this.dialogVisible = false;
      var cid = this.currentCourse.course_id;
      this.$http
        .post(
          "http://182.92.122.205:8080/",
          "sqltype=5&cid=123&eid=" +
            this.message.exp_id +
            "&ename=" +
            this.message.exp_name +
            "&id=" +
            cid +
            "&caty=123&hard=123&hour=0"
        )
        .then(() => {
          this.$http
            .post(
              "http://182.92.122.205:8080/",
              "sql=insert-into-exp_time-values(" +
                this.message.exp_id +
                ",0," +
                this.message.time +
                "," +
                this.message.room +
                "," +
                this.message.num +
                ",0);"
            )
            .then(() => {
              this.$http.post(
                "http://182.92.122.205:8080/",
                "sql=insert-into-teacher-values(null," +
                  this.message.exp_id +
                  ",0);"
              );
            });
        });
    }
  },
  components: {
    MyTableLab,
    FormLineLab
  },
  data() {
    return {
      message: {},
      dialogVisible: false,
      formLabelWidth: "120px"
    };
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
