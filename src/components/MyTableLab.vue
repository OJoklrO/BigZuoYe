<template>
  <div>
    <el-table
      class="table"
      :data="experiments"
      style="width: 100%"
      max-height="330"
    >
      <el-table-column prop="exp_id" label="实验编号"> </el-table-column>
      <el-table-column prop="exp_name" label="实验名称"> </el-table-column>
      <el-table-column prop="time" label="实验时间"> </el-table-column>
      <el-table-column prop="exp_tc" label="实验员"> </el-table-column>
      <el-table-column prop="num" label="人数"> </el-table-column>
      <el-table-column prop="room" label="实验室"> </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
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
        <el-form-item label="实验室" :label-width="formLabelWidth">
          <el-input v-model="message.room" autocomplete="off"></el-input>
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
    ...mapState({ experiments: state => state.experiment.experiments })
  },
  methods: {
    postRow(index, rows) {
      console.log(index);
      console.log(rows);
      this.message = rows;
      this.index_all = index;
      this.dialogVisible = true;
    },
    edit_form() {
      // 提交全局变量
      this.$store.commit("EditExperiment", {
        value: this.message,
        index: this.index_all
      });
      this.dialogVisible = false;
    }
  },
  data() {
    return {
      index_all: 0,
      message: {},
      dialogVisible: false,
      formLabelWidth: "120px"
    };
  }
};
</script>
<style>
.table {
  width: 100px;
}
</style>
