<template>
  <el-dropdown @command="handleCommand">
    <el-avatar id="avator" :size="60">
      {{ content == "" ? content : content.substring(0, 2) }}
    </el-avatar>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>退出</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      content: state => state.user.username
    })
  },
  methods: {
    handleCommand() {
      this.$store.commit("SignOut");
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
#avator {
  font-size: 160%;
}
</style>
