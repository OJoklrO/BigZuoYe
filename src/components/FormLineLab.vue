<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="课程名称" class="room_search">
      <el-select
        v-model="currentCourse.name"
        placeholder="实验名称"
        @change="onValueChange"
      >
        <el-option
          v-for="item in nameArray()"
          :key="item.key"
          :label="item.label"
          :value="item.key"
      /></el-select>
    </el-form-item>
    <el-form-item label="课程编号" class="room_search" @change="onValueChange">
      <el-select v-model="currentCourse.id" placeholder="实验编号">
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
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    idArray() {
      var temp = new Array();
      for (var i in this.courses) {
        temp.push({ key: this.courses[i].id, label: this.courses[i].id });
      }
      return temp;
    },
    nameArray() {
      var temp = new Array();
      for (var i in this.courses) {
        temp.push({ key: this.courses[i].id, label: this.courses[i].name });
      }
      return temp;
    },
    onValueChange() {
      this.$store.commit("SetCurrentCourse", this.value);
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
