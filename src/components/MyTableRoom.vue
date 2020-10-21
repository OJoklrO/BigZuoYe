<template>
  <div>
    <el-table
      class="table"
      :data="tableData"
      style="width: 100%"
      max-height="500"
    >
      <el-table-column fixed prop="exp_name" label="实验名称" min-width="120">
      </el-table-column>
      <el-table-column prop="exp_id" label="实验编号" min-width="150">
      </el-table-column>
      <el-table-column prop="time" label="实验时间" min-width="150">
      </el-table-column>
      <el-table-column prop="batch" label="实验批次" min-width="100">
      </el-table-column>
      <el-table-column prop="exp_tc" label="实验员" min-width="150">
      </el-table-column>
      <el-table-column prop="num" label="实验人数" min-width="100">
      </el-table-column>
      <el-table-column fixed="right" label="操作" min-width="120">
        <template slot-scope="scope">
          <!-- <el-button
          @click.native.prevent="deleteRow(scope.$index, scope.row)"
          type="text"
          size="small"
        >
          移除
        </el-button> -->
          <el-button
            @click.native.prevent="postRow(scope.$index, scope.row)"
            type="text"
            size="small"
          >
            编辑
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="编辑实验" :visible.sync="dialogVisible">
      <el-form @submit.native.prevent>
        <el-form-item label="实验名称" :label-width="formLabelWidth">
          <el-input v-model="message.exp_name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="实验编号" :label-width="formLabelWidth">
          <el-input v-model="message.exp_id" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="实验时间" :label-width="formLabelWidth">
          <el-input v-model="message.time" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="实验批次" :label-width="formLabelWidth">
          <el-input v-model="message.batch" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="实验员" :label-width="formLabelWidth">
          <el-input v-model="message.exp_tc" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="实验人数" :label-width="formLabelWidth">
          <el-input v-model="message.num" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="edit_form">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      tableData: state => state.labroom.room_message,
      gitroom: state => state.labroom.room
    })
  },
  methods: {
    // deleteRow(index, rows) {
    //   // 向message赋值行的信息
    //   // console.log(index)
    //   // console.log(this.message)
    //   rows.splice(index, 1);
    //   // console.log(rows)
    //   // 向服务器请求删除行记录
    //   var argu_post="sqltype=6&id="+rows.exp_id+"&room"+this.gitroom;
    //   this.$http.post("http://182.92.122.205:8080/",argu_post)
    // },
    postRow(index, rows) {
      console.log(index);
      console.log(rows);
      this.message = rows;
      this.index_all = index;
      this.dialogVisible = true;
    },
    edit_form() {
      // 提交全局变量
      this.$store.commit("editLab", {
        message: this.message,
        index: this.index_all
      });
      // 向服务器提交
      // var argu_post="sqltype=5&cid="++"&eid="+this.message.exp_id+"&ename"+this.message.exp_name+"&id"+"&caty"+this.num+"&hard=0"+"&hour"+this.message.time
      // this.$http.post("http://182.92.122.205:8080/",argu_post).then(res=>{
      //   var str=res.data
      //   str=str.replace(/'/g, '"')
      //   var resobj=JSON.parse(str)
      //   console.log(resobj)
      //   // 给容量赋值
      //   this.room_capcity=resobj[0].capacity
      //   console.log(this.room_capcity)
      //   // 向store提交实验室所有实验信息  数组
      //   var temp = [];
      //   temp = resobj;
      //   this.$store.commit("roomQuery", temp);
      //   this.$store.commit("gitroom",this.current_room)
      // })
      // 把message属性清空
      this.dialogVisible = false;
    }
  },
  data() {
    return {
      dialogVisible: false,
      formLabelWidth: "120px",
      index_all: 0,
      rows_all: [],
      message: {
        // exp_name:"",
        // exp_tc:"",
        // batch:"",
        // exp_id:"",
        // num:"",
        // time:""
      }
    };
  }
};
</script>
