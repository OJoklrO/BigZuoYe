<template>
  <el-menu default-active="" class="aside">
    <el-menu-item
      :index="item.path"
      v-for="item in asideMenu"
      :key="item.path"
      @click="ToPath(item.path)"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  methods: {
    ToPath(item) {
      this.$router.push(item);
    }
  },
  data() {
    return {
      asideMenu: [
        {
          path: "/course",
          label: "课程管理",
          icon: "date"
        },
        {
          path: "/labmanager",
          label: "实验管理",
          icon: "tickets"
        },
        {
          path: "/lab",
          label: "实验室管理",
          icon: "postcard"
        },
        {
          path: "/addachieve",
          label: "成绩录入",
          icon: "right"
        },
        {
          path: "/search",
          label: "成绩查询",
          icon: "search"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
  width: 90%;
}
</style>
