<template>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="实验名称" class="room_search">
        <el-select v-model="formInline.region" placeholder="实验名称">
        <el-option label="G123" value="shanghai"></el-option>
        <el-option label="G234" value="beijing"></el-option>
        </el-select>
    </el-form-item>
    <el-form-item label="实验编号" class="room_search">
        <el-select v-model="formInline.region" placeholder="实验编号">
        <el-option label="G123" value="shanghai"></el-option>
        <el-option label="G234" value="beijing"></el-option>
        </el-select>
    </el-form-item>
    <el-form-item class="room_select_button">
        <el-button type="primary" @click="onSubmit" icon="el-icon-search">搜索</el-button>
    </el-form-item>
    </el-form>
</template>>
<script>
  export default {
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
<style scoped lang="scss">
.room_search{
  margin-right: 100px;
  margin-left: 100px;
}
.room_capcity{
  margin-right: 200px;
}
</style>