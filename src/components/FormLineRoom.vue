<template>
    <el-form :inline="true" class="demo-form-inline">
    <el-form-item label="实验室" class="room_search">
        <el-select v-model="current_room" placeholder="实验室">
          <el-option v-for="(item,index) in room_list" :key="index" :label="item" :value="item" ></el-option>
        </el-select>
    </el-form-item>
    <el-form-item label="实验室容量" class="room_capcity">
        <el-input v-model="room_capcity" placeholder="无" :value="room_capcity"></el-input>
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
        current_room:"",
        room_capcity:"22",
        room_list:["G123","G234","G345"],
        message:[{
          lab_name:"111",
          lab_id:"111",
          lab_time:"111",
          lab_catch:0,
          laber:"111",
          lab_number:0
        }],
        
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
        var temp = []
        temp=this.message
        this.$store.commit("roomQuery", temp)
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