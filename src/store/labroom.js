export default {
  state: {
    room_message: [],
    room: "",
    capacity: "",
    address: ""
  },
  mutations: {
    roomQuery(state, val) {
      state.room_message = val;
    },
    addLab(state, val) {
      state.room_message.push(val);
    },
    editLab(state, val) {
      state.room_message[val.index] = val.message;
    },
    gitroom(state, val) {
      state.room = val;
    },
    capAndadd(state, val) {
      state.capacity = val.capacity;
      state.address = val.address;
    }
  },
  actions: {}
};
