export default {
  state: {
    currentMenu: {}
  },
  mutations: {
    selectMenu(state, val) {
      if (state.currentMenu == null) {
        state.currentMenu = val;
        return;
      }
      if (val.path !== state.currentMenu.path) {
        state.currentMenu = val;
      }
    },
    toHome(state) {
      state.currentMenu = null;
    }
  },
  actions: {}
};
