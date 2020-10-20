<template>
  <el-form :inline="true" class="demo-form-inline banner">
    <el-form-item label="实验室" class="room_search">
      <el-select v-model="current_room" placeholder="实验室">
        <el-option
          v-for="(item, index) in room_list"
          :key="index"
          :label="item"
          :value="item"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="实验室容量" class="room_capcity">
      <el-input
        v-model="room_capcity"
        placeholder=""
        :value="room_capcity"
        :disabled="true"
      ></el-input>
    </el-form-item>
    <el-form-item label="实验室地点" class="room_address">
      <el-input
        v-model="room_address"
        placeholder=""
        :value="room_address"
        :disabled="true"
      ></el-input>
    </el-form-item>
    <el-form-item class="room_select_button">
      <el-button type="primary" @click="onSubmit" icon="el-icon-search"
        >搜索</el-button
      >
    </el-form-item>
  </el-form> 
</template>
<script>
import {mapState} from "vuex"
export default {
  data() {
    return {
      current_room: "",
      room_capcity: "",
      room_address:"",
      room_list: [],
      message: []
    };
  },
  methods: {
    onSubmit() {
      // console.log("submit!");
      var argu_post="sqltype=7&room="+this.current_room;
       this.$http.post("http://182.92.122.205:8080/",argu_post).then(res=>{
          var str=res.data
          var temp = [];
          if(String(str) != ""){
            str=str.replace(/'/g, '"')
            var resobj=JSON.parse(str)
            console.log(resobj)
            // 给容量赋值
            this.room_capcity=resobj[0].capacity
            this.room_address=resobj[0].room_address
            console.log(this.room_capcity)
            // 向store提交实验室所有实验信息  数组
            temp = resobj;
          }
          else{
            this.open3()
          }
          this.$store.commit("roomQuery", temp);
          this.$store.commit("gitroom",this.current_room)
          this.$store.commit("capAndadd",{"capacity":this.room_capcity,"address":this.room_address})
      })
    },
    open3() {
      this.$message({
        message: '没有所查找信息哦！',
        type: 'warning'
      });
    }
  },
  computed: {
    ...mapState({gitroom:state=>state.labroom.room,gitcapacity:state=>state.labroom.capacity,gitaddress:state=>state.labroom.address})
  },
  beforeMount:function(){
    this.current_room=this.gitroom
    this.room_capcity=this.gitcapacity
    this.room_address=this.gitaddress
    this.$http.post("http://182.92.122.205:8080/","gettable=address").then(res=>{
        var str=res.data
        str=str.replace(/'/g, '"')
        var resobj=JSON.parse(str)
        // 循环赋值
        for(var item of resobj){
          this.room_list.push(item.room)
        }
        // console.log(resobj)
      })
  }
};
</script>
<style scoped lang="scss">
// .room_search {
//   margin-right: 100px;
//   margin-left: 100px;
// }
// .room_capcity {
//   margin-right: 200px;
// }
.banner{
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
