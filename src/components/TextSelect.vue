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
