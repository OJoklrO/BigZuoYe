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
export default {
  computed: {
    randerList: function() {
      // var list = new Array();
      // if (this.$store.state.user == null) 
      return this.asideMenu;

      // for (var i in this.asideMenu) {
      //   if (
      //     this.asideMenu[i].authority == 1 ||
      //     this.asideMenu[i].authority == 3
      //   )
      //     list.push(this.asideMenu[i]);
      // }

      // return list;
    }
  },
  methods: {
    ClickMenu(item) {
      this.$store.commit("selectMenu", item);
      this.$router.push(item);
    }
  },
  data() {
    return {
      asideMenu: [
        {
          path: "/course",
          label: "课程管理",
          icon: "date",
          authority: 1
        },
        {
          path: "/labmanager",
          label: "实验管理",
          icon: "tickets",
          authority: 1
        },
        {
          path: "/lab",
          label: "实验室管理",
          icon: "postcard",
          authority: 1
        },
        {
          path: "/addachieve",
          label: "成绩录入",
          icon: "right",
          authority: 2
        },
        {
          path: "/search",
          label: "成绩查询",
          icon: "search",
          authority: 3
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
