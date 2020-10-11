export default {
<<<<<<< HEAD
    state: {
        room_message:[]
    },
    mutations: {
        roomQuery(state, val) {
        state.room_message = val;
      },
      addLab(state,val){
        state.room_message.push(val)
      },
      editLab(state,val){
        state.room_message[val.index]=val.message
      }
    },
    actions: {}
  };
  
=======
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
>>>>>>> f8038721eac31cc6f471e6886bb81f0afcb8211a
