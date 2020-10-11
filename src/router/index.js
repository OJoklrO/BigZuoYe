import Vue from "vue";
import VueRouter from "vue-router";

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: () => import("@/views/Main.vue")
    },
    {
      path: "/course",
      component: () => import("@/views/Course.vue")
    },
    {
      path: "/labmanager",
      component: () => import("@/views/LabManager.vue")
    },
    {
      path: "/lab",
      component: () => import("@/views/Lab.vue")
    },
    {
      path: "/addachieve",
      component: () => import("@/views/AddAchieve.vue")
    },
    {
      path: "/search",
      component: () => import("@/views/Search.vue")
    }
  ]
});
