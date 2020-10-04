<template>
  <div class="textselect">
    <a class="selectfont">{{ font }}</a>
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in data"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
</template>

<script>
export default {
  props: {
    font: {
      type: String
    },
    data: {
      type: Array
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
