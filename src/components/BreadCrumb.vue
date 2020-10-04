<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item><a @click="toHome()">首页</a></el-breadcrumb-item>
    <el-breadcrumb-item v-if="current">{{ current.label }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({ current: state => state.tab.currentMenu })
  },
  methods: {
    toHome() {
      this.$store.commit("toHome");
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
.el-breadcrumb {
  height: 90%;
  display: flex;
  align-items: center;
}
</style>
