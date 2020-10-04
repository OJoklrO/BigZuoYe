<template>
  <div id="header">
    <i id="icon" class="el-icon-s-home" @click="onclick">实验管理系统</i>
    <avator id="avator" />
    <el-divider />
  </div>
</template>

<script>
import Avator from "../components/Avator";
export default {
  components: {
    Avator
  },
  methods: {
    onclick() {
      this.$store.commit("toHome");
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
#icon {
  font-size: 50px;
  color: #8cc5ff;
}
#avator {
  float: right;
  height: 80%;
}
</style>
