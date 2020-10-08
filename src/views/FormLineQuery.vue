<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="实验名称" class="room_search">
      <el-select v-model="formInline.region" placeholder="实验名称">
        <el-option label="G123" value="shanghai"></el-option>
        <el-option label="G234" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="实验员" class="room_search">
      <el-select v-model="formInline.region" placeholder="姓名">
        <el-option label="G123" value="shanghai"></el-option>
        <el-option label="G234" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="班级" class="room_search">
      <el-select v-model="formInline.region" placeholder="实验班级">
        <el-option label="G123" value="shanghai"></el-option>
        <el-option label="G234" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item class="room_select_button">
      <el-button type="primary" @click="onSubmit" icon="el-icon-search"
        >搜索</el-button
      >
    </el-form-item>
  </el-form> </template
>>
<script>
export default {
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
    }
  }
};
</script>
<style scoped lang="scss">
.room_search {
  margin-right: 50px;
  margin-left: 50px;
}
.room_capcity {
  margin-right: 50px;
}
</style>
