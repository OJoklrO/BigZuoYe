import Vue from "vue";
import VueRouter from "vue-router";

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
