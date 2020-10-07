import Vue from "vue";
import Vuex from "vuex";
import tab from "./tab";
import grade from "./grade";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    tab,
    grade
  }
});
