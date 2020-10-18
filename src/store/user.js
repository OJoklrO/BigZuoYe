export default {
  state: {
    userList:[
      {
        userName:"18130500078",
        password:"123456"
      },
      {
        userName:"877494093",
        password:"234567"
      }
    ],
    test_list:[]
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
