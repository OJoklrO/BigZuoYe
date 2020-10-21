<template>
  <div class="banner">
    <div class="header">
      <!-- 搜索 -->
      <form-line-room></form-line-room>
    </div>
    <el-divider content-position="left" style="margin: 50px 0;" class="line"
      >实验室信息</el-divider
    >
    <!-- 表格 -->
    <my-table-room></my-table-room>
    <!-- 按钮 -->
    <!-- <div class="btn_banner">
      <el-button round class="add_button" @click="dialogVisible = true">
        <i class="el-icon-plus"></i>
        添加
      </el-button>
    </div> -->
    <el-dialog title="添加实验" :visible.sync="dialogVisible">
      <el-form @submit.native.prevent>
        <el-form-item label="实验名称" :label-width="formLabelWidth">
          <el-input v-model="message.lab_name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="实验编号" :label-width="formLabelWidth">
          <el-input v-model="message.lab_id" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="实验时间" :label-width="formLabelWidth">
          <el-input v-model="message.lab_time" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="实验批次" :label-width="formLabelWidth">
          <el-input v-model="message.lab_catch" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="实验员" :label-width="formLabelWidth">
          <el-input v-model="message.laber" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="实验人数" :label-width="formLabelWidth">
          <el-input v-model="message.lab_number" autocomplete="off"></el-input>
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
import MyTableRoom from "@/components/MyTableRoom";
import FormLineRoom from "@/components/FormLineRoom";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({ tableData: state => state.labroom.room_message })
  },
  components: {
    MyTableRoom,
    FormLineRoom
  },
  data() {
    return {
      dialogVisible: false,
      message: {
        lab_name: "",
        lab_id: "",
        lab_time: "",
        lab_catch: 0,
        laber: "",
        lab_number: 0,
        dialogVisible: false,
        formLabelWidth: "80px"
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    submit_form() {
      this.$store.commit("addLab", this.message);
      this.dialogVisible = false;
      // console.log(this.tableData)
      // console.log("chenggong")
    }
  }
};
</script>

<style lang="scss" scoped>
.line {
  margin-bottom: 50px;
}
.btn_banner {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.add_button {
  margin-top: 40px;
}
</style>
