export default {
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
  
