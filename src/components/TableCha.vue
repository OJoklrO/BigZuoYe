<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    :default-sort="{ prop: 'date', order: 'descending' }"
    height="500"
  >
    <el-table-column prop="stuId" label="学号" sortable width="180">
    </el-table-column>
    <el-table-column prop="stuName" label="姓名" width="180"> </el-table-column>
    <el-table-column prop="stuClass" label="班级" sortable> </el-table-column>
    <el-table-column prop="stuGrade" label="成绩" sortable> </el-table-column>
  </el-table>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({ tableData: state => state.grade.grades })
  },
  methods: {
    formatter(row) {
      return row.address;
    }
  }
};
</script>
