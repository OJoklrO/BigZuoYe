<template>
<div>
   <el-table class="table"
    :data="tableData"
    style="width: 100%"
    height="500">
    <el-table-column
      fixed
      prop="lab_name"
      label="实验名称"
      width="150">
    </el-table-column>
    <el-table-column
      prop="lab_id"
      label="实验编号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="lab_time"
      label="实验时间"
      width="120">
    </el-table-column>
    <el-table-column
      prop="lab_catch"
      label="实验批次"
      width="120">
    </el-table-column>
    <el-table-column
      prop="laber"
      label="实验员"
      width="300">
    </el-table-column>
    <el-table-column
      prop="lab_number"
      label="实验人数"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
          移除
        </el-button>
        <el-button
          @click.native.prevent="postRow(scope.$index, tableData)"
          type="text"
          size="small">
          编辑
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog title="添加实验" :visible.sync="dialogVisible">
      <el-form @submit.native.prevent>
        <el-form-item label="实验名称" :label-width="formLabelWidth">
          <el-input v-model="tableData[index_all].lab_name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="实验编号" :label-width="formLabelWidth">
          <el-input v-model="tableData[index_all].lab_id" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="实验时间" :label-width="formLabelWidth">
          <el-input v-model="tableData[index_all].lab_time" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="实验批次" :label-width="formLabelWidth">
          <el-input v-model="tableData[index_all].lab_catch" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="实验员" :label-width="formLabelWidth">
          <el-input v-model="tableData[index_all].laber" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="实验人数" :label-width="formLabelWidth">
          <el-input v-model="tableData[index_all].lab_number" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </div>
    </el-dialog>
</div>
 
</template>

<script>
  import {mapState} from "vuex"
  export default {
     computed: {
        ...mapState({tableData: state => state.labroom.room_message})
     },
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      postRow(index,rows){
        console.log(index)
        console.log(rows)
        this.index_all=index
        this.dialogVisible=true

      }
    },
    data() {
      return {
        dialogVisible:false,
        formLabelWidth:"120px",
        index_all:0,
        rows_all:[]
      }
    }
  }
</script>
<style>
.table{
  width: 100px;
}
</style>