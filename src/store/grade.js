export default {
  state: {
    grades: [],
    labname:""
  },
  mutations: {
    SetGrade(state, val) {
      state.grades = val;
    },
    editGrade(state,val){
      state.grades[val.index].grade=val.grade;
      console.log(state.grades)
    },
    setclass(state,val){
      state.labname=val;
    }
  },
  actions: {}
};
