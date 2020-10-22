export default {
  state: {
    temp: 0,
    currentCourse: {},
    courses: []
  },
  mutations: {
    SetCourseArray(state, val) {
      state.courses = val;
    },
    SetCurrentCourse(state, key) {
      for (var i in state.courses) {
        if (state.courses[i].course_id == key) {
          state.currentCourse = state.courses[i];
        }
      }
      state.temp = 1;
    },
    AddCourse(state, val) {
      state.courses.push(val);
    },
    DecreaseTemp(state) {
      state.temp = 0;
    }
  },
  actions: {}
};
