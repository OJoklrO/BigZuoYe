<template>
  <div class="textselect">
    <a class="selectfont">{{ font }}</a>
    <el-select v-model="value" placeholder="请选择" @change="onValueChange">
      <el-option
        v-for="item in data"
        :key="item.key"
        :label="item.label"
        :value="item.key"
      />
    </el-select>
  </div>
</template>

<script>
export default {
  methods: {
    onValueChange() {
      this.$store.commit("SetCurrentCourse", this.value);
      this.$http
        .post(
          "http://182.92.122.205:8080/",
          "sql=select-exp_name,time,exp_tc,num,room-from-experiment-natural-join-exp_time-natural-join-teacher-where-course_id=" +
            this.value +
            ";"
        )
        .then(res => {
          var str = res.data;
          var result;
          if (String(str) != "") {
            str = str.replace(/'/g, '"');
            result = JSON.parse(str);
          } else {
            result = [];
          }
          this.$store.commit("SetExperiment", result);
        });
    }
  },
  props: {
    font: {
      type: String
    },
    data: {
      type: Array
    },
    showValue: {
      type: String
    }
  },
  data() {
    return {
      value: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.textselect {
  padding: 5px;
}
.selectfont {
  font-size: 20px;
  padding: px;
}
.el-select {
  float: right;
}
</style>
