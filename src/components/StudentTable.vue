<template>
<div>
  <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%;" max-height="420">
    <el-table-column
      label="学号"
      prop="stuId">
    </el-table-column>
    <el-table-column
      label="姓名"
      prop="stuName">
    </el-table-column>
    <el-table-column
      label="班级"
      prop="stuClass">
    </el-table-column>
    <el-table-column
      label="实验成绩"
      prop="stuGrade">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
      </template>
    </el-table-column>
  </el-table>
  <!-- 弹出框 -->
  <el-dialog title="成绩录入" :visible.sync="dialogVisible">
    <el-form @submit.native.prevent>
      <el-form-item label="分数" :label-width="formLabelWidth">
        <el-input v-model="grade" autocomplete="off" @keyup.enter.native.prevent="submit_form()"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="submit_form">确 定</el-button>
    </div>
  </el-dialog>
</div>
  
</template>

<script>
  import {mapState} from "vuex"
  export default {
    computed: {
        ...mapState({tableData: state => state.grade.grades})
    },
    data() {
      return {
        search: '',
        grade:"",
        item_index:0,
        dialogVisible:false,
        formLabelWidth: '120px'
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index);
        console.log(row);
        // 实现改变成绩操作
        console.log(this.tableData[index].stuGrade)
        this.dialogVisible=true;
        this.item_index=index
        console.log(this.item_index)
        // 把grade赋值给学生
        
        // this.tableData[index].stuGrade=this.grade;
        // this.grade=""
      },
      submit_form(){
          this.$store.commit("editGrade",{grade:this.grade,index:this.item_index})
          this.dialogVisible = false
          this.grade=""
          console.log(this.item_index)
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
</script>
<style lang="scss">
.box_banner {
  width: 600px;
  height: 600px;
  background-color: red;
}
</style>
