export default {
  state: {
    temp: 0,
    currentCourse: {},
    courses: [
      {
        id: "123456",
        name: "实验一",
        hour: "50",
        department: "物光院",
        class: "一班",
        term: "第一学期"
      },
      {
        id: "234567",
        name: "实验二",
        hour: "40",
        department: "计科院",
        class: "二班",
        term: "第二学期"
      }
    ]
  },
  mutations: {
    SetCourseArray(state, val) {
      state.courses = val;
    },
    SetCurrentCourse(state, key) {
      for (var i in state.courses) {
        if (state.courses[i].id == key) state.currentCourse = state.courses[i];
      }
      state.temp = 1;
    },
    DecreaseTemp(state) {
      state.temp = 0;
    }
  },
  actions: {}
};
