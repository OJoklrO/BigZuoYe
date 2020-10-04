export default {
  state: {
    user: {}
  },
  mutations: {
    SignIn(state, val) {
      state.user = val;
    },
    SignOut(state) {
      state.user = null;
    }
  },
  actions: {}
};
