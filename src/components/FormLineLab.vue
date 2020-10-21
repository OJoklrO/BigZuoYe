<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="课程名称" class="room_search">
      <el-select v-model="value" placeholder="实验名称" @change="onValueChange">
        <el-option
          v-for="item in nameArray()"
          :key="item.key"
          :label="item.label"
          :value="item.key"
      /></el-select>
    </el-form-item>
    <el-form-item label="课程编号" class="room_search">
      <el-select v-model="value" placeholder="实验编号" @change="onValueChange">
        <el-option
          v-for="item in idArray()"
          :key="item.key"
          :label="item.label"
          :value="item.key"
      /></el-select>
    </el-form-item>
    <el-form-item class="room_select_button">
      <el-button type="primary" @click="onSubmit" icon="el-icon-search"
        >搜索
      </el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      currentCourse: state => state.course.currentCourse,
      courses: state => state.course.courses
    })
  },
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      },
      value: ""
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    idArray() {
      var temp = new Array();
      for (var i in this.courses) {
        temp.push({
          key: this.courses[i].course_id,
          label: this.courses[i].course_id
        });
      }
      return temp;
    },
    nameArray() {
      var temp = new Array();
      for (var i in this.courses) {
        temp.push({
          key: this.courses[i].course_id,
          label: this.courses[i].course_name
        });
      }
      return temp;
    },
    onValueChange() {
      this.$store.commit("SetCurrentCourse", this.value);
      this.$http
        .post(
          "http://182.92.122.205:8080/",
          "sql=select-exp_id,exp_name,time,exp_tc,num,room-from-experiment-natural-join-exp_time-natural-join-teacher-where-course_id=" +
            this.value +
            ";"
        )
        .then(res => {
          var str = res.data;
          var result;
          if (String(str) != "") {
            str = str.replace(/'/g, '"');
            result = JSON.parse(str);
          } else {
            result = [];
          }
          this.$store.commit("SetExperiment", result);
        });
    }
  }
};
</script>
<style scoped lang="scss">
.room_search {
  margin-right: 100px;
  margin-left: 100px;
}
.room_capcity {
  margin-right: 200px;
}
</style>
