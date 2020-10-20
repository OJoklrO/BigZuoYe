<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="实验名称" class="room_search">
      <el-select v-model="current_lab" placeholder="实验名称">
        <el-option
          v-for="(item, index) in lab_list"
          :key="index"
          :label="item"
          :value="item"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="实验员" class="room_search">
      <el-select v-model="current_laber" placeholder="姓名">
        <el-option
          v-for="(item, index) in laber_list"
          :key="index"
          :label="item"
          :value="item"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="班级" class="room_search">
      <el-select v-model="current_class" placeholder="班级">
        <el-option
          v-for="(item, index) in class_list"
          :key="index"
          :label="item"
          :value="item"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item class="room_select_button">
      <el-button type="primary" @click="onSubmit" icon="el-icon-search"
        >搜索</el-button
      >
    </el-form-item>
  </el-form> 
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      },
      current_lab: "",
      current_laber: "",
      current_class: "",
      lab_list: [],
      laber_list: [],
      class_list: [],
      query_message: []
      }
    },
    methods: {
      onSubmit() {
        // 编写筛选函数获得query_message对象
        // 用组成的字符串代替参数
        var argu_post="sqltype=8&na="+this.current_lab+"&teac="+this.current_laber+"&cla="+this.current_class;
        // console.log(argu_post)
        // 请求数据
        this.$http.post("http://182.92.122.205:8080/",argu_post).then(res=>{
          var str=res.data
          if(String(str) != ""){
            str=str.replace(/'/g, '"')
            var resobj=JSON.parse(str)
            console.log(resobj)
            this.query_message=resobj
          }else{
            this.query_message=[]
            // 警告弹框
            this.open3()
          }
          // 向vuex提交数据
          var temp = []
          temp=this.query_message
          this.$store.commit("SetGrade", temp)
        })
      },
      open3() {
      this.$message({
        message: '没有所查找信息哦！',
        type: 'warning'
      });
    }
    },
    beforeMount:function(){
      // 先把数据清空store
      this.$store.commit("SetGrade", [])
      // 用current组成字符串  --lab_list
      this.$http.post("http://182.92.122.205:8080/","gettable=experiment").then(res=>{
        var str=res.data
        str=str.replace(/'/g, '"')
        var resobj=JSON.parse(str)
        // 循环赋值
        for(var item of resobj){
          this.lab_list.push(item.exp_name)
        }
        // console.log(resobj)
      })
      //  --laber_list
      this.$http.post("http://182.92.122.205:8080/","sql=select-distinct-exp_tc-from-teacher").then(res=>{
        var str=res.data
        // console.log(str)
        str=str.replace(/'/g, '"')
        var resobj=JSON.parse(str)
        // 循环赋值
        for(var item of resobj){
          this.laber_list.push(item.exp_tc)
        }
        // console.log(resobj)
      })
      //  --class_list
      this.$http.post("http://182.92.122.205:8080/","gettable=course_class").then(res=>{
        var str=res.data
        str=str.replace(/'/g, '"')
        var resobj=JSON.parse(str)
        // 循环赋值
        for(var item of resobj){
          this.class_list.push(item.class)
        }
        // console.log(resobj)
      })
     

    }
  }

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
