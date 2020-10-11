import Vue from "vue";
import Vuex from "vuex";
import tab from "./tab";
import grade from "./grade";
import labroom from "./labroom";
import experiment from "./expriment";
import course from "./course";
import user from "./user";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    tab,
    grade,
    labroom,
    experiment,
    course,
    user
  }
});
