<template>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="实验名称" class="room_search">
        <el-select v-model="current_lab" placeholder="实验名称默认">
          <el-option v-for="(item,index) in lab_list" :key="index" :label="item" :value="item" ></el-option>
        </el-select>
    </el-form-item>
    <el-form-item label="实验员" class="room_search">
        <el-select v-model="current_laber" placeholder="姓名">  
          <el-option v-for="(item,index) in laber_list" :key="index" :label="item" :value="item" ></el-option>
        </el-select>
    </el-form-item>
    <el-form-item label="实验批次" class="room_search">
        <el-select v-model="current_batch" placeholder="批次号">
          <el-option v-for="(item,index) in batch_list" :key="index" :label="item" :value="item" ></el-option>
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
          region: '',
          input_value:'asdf'
        },
        current_lab:"",
        current_laber:"",
        current_batch:"",
        lab_list:["物理实验","化学实验"],
        laber_list:["任","郭","马"],
        batch_list:["1","2","3","4"],
        query_message:[{
          stuId:"18130500078",
          stuName:"任腾宇",
          stuGrade:100,
          stuClass:"1803051"
        },
        {
          stuId:"18130500026",
          stuName:"郭向宇",
          stuGrade:99,
          stuClass:"1803051"
        },
        {
          stuId:"18130500008",
          stuName:"马钰泓",
          stuGrade:98,
          stuClass:"1803051"
        }]
      }
    },
    methods: {
      onSubmit() {
        console.log(this.current_lab);
        console.log(this.current_laber);
        console.log(this.current_batch);
        // 编写筛选函数获得query_message对象
        var temp = []
        temp=this.query_message
        this.$store.commit("SetGrade", temp)
      }
    }
  }
</script>
<style scoped lang="scss">
.room_search{
  margin-right: 50px;
  margin-left: 50px;
}
.room_capcity{
  margin-right: 50px;
}
</style>