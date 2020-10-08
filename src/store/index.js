import Vue from "vue";
import Vuex from "vuex";
import tab from "./tab";
import grade from "./grade";
import experiment from "./expriment";
import course from "./course";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    tab,
    grade,
    experiment,
    course
  }
});
