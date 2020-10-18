<template>
  <el-menu default-active="" class="aside">
    <el-menu-item
      :index="item.path"
      v-for="item in randerList"
      :key="item.path"
      @click="ClickMenu(item)"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      authority: state => state.user.userauthority,
      randerList: state => state.user.randerList
    })
  },
  methods: {
    ClickMenu(item) {
      this.$store.commit("selectMenu", item);
      this.$router.push(item);
    }
  }
};
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
  width: 90%;
}
</style>
