export default {
  state: {
    experiments: []
  },
  mutations: {
    SetExperiment(state, val) {
      state.experiments = val;
    },
    EditExperiment(state, val) {
      state.experiments[val.index] = val.value;
    },
    AddExperiment(state, val) {
      state.experiments.push(val);
    }
  },
  actions: {}
};
