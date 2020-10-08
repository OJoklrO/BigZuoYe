export default {
  state: {
    room_message: []
  },
  mutations: {
    roomQuery(state, val) {
      state.room_message = val;
    }
  },
  actions: {}
};
