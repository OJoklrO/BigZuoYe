export default {
  state: {
    grades: [{
      stuId:"18130500078",
      stuName:"任腾宇",
      stuGrade:100,
      stuClass:"1803051"
    },
    {
      stuId:"18130500026",
      stuName:"郭向宇",
      stuGrade:99,
      stuClass:"1803051"
    },
    {
      stuId:"18130500008",
      stuName:"马钰泓",
      stuGrade:98,
      stuClass:"1803051"
    }]
  },
  mutations: {
    SetGrade(state, val) {
      state.grades = val;
    },
    editGrade(state,val){
      state.grades[val.index].stuGrade=val.grade;
    }
  },
  actions: {}
};
