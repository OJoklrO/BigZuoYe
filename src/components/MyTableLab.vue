<template>
  <el-table
    class="table"
    :data="experiments"
    style="width: 100%"
    max-height="330"
  >
    <el-table-column prop="exp_name" label="实验名称"> </el-table-column>
    <el-table-column prop="time" label="实验时间"> </el-table-column>
    <el-table-column prop="exp_tc" label="实验员"> </el-table-column>
    <el-table-column prop="num" label="人数"> </el-table-column>
    <el-table-column prop="room" label="实验室"> </el-table-column>
    <el-table-column fixed="right" label="操作">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small"
        >
          移除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({ experiments: state => state.experiment.experiments })
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    }
  }
};
</script>
<style>
.table {
  width: 100px;
}
</style>
