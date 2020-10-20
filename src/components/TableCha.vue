<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    :default-sort="{ prop: 'date', order: 'descending' }"
    height="500"
  >
    <el-table-column prop="stu_id" label="学号" sortable width="180">
    </el-table-column>
    <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
    <el-table-column prop="class" label="班级" sortable> </el-table-column>
    <el-table-column prop="grade" label="成绩" sortable> </el-table-column>
    
  </el-table>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({ 
      tableData:state =>state.grade.grades
    })
  },
  data(){
    return{
      search:"",
      new_list:[]
    }
  },
  methods: {
    formatter(row) {
      return row.address;
    },
  //   filte(){
  //     this.tableData.forEach(item =>{
  //       if(item.name.indexOf(this.search)!=-1){
  //         this.new_list.push(item)
  //       }
  //     })
  //     console.log("daf")
  //     this.tableData=this.new_list
  //   }
  },
  beforeMount(){
    this.new_list=this.tableData
  }
};
</script>
