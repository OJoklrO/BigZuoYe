<template>
  <div>
    <el-table
      :data="
        tableData.filter(
          data =>
            !search || data.name.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 100%;"
      max-height="420"
    >
      <el-table-column label="学号" prop="stuId"> </el-table-column>
      <el-table-column label="姓名" prop="stuName"> </el-table-column>
      <el-table-column label="班级" prop="stuClass"> </el-table-column>
      <el-table-column label="实验成绩" prop="stuGrade"> </el-table-column>
      <el-table-column align="right">
        <template slot="header">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >Edit</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="box_banner">
      <input type="text" placeholder="请输入成绩" v-model="grade" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({ tableData: state => state.grade.grades })
  },
  data() {
    return {
      search: "",
      grade: ""
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index);
      console.log(row);
      // 实现改变成绩操作
      console.log(this.tableData[index].stuGrade);

      this.tableData[index].stuGrade = 60;
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>
<style lang="scss">
.box_banner {
  width: 600px;
  height: 600px;
  background-color: red;
}
</style>
