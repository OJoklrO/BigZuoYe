export default {
  state: {
    username: "",
    userauthority: 0,
    randerList: [],
    asideMenu: [
      {
        path: "/course",
        label: "课程管理",
        icon: "date",
        authority: 1
      },
      {
        path: "/labmanager",
        label: "实验管理",
        icon: "tickets",
        authority: 1
      },
      {
        path: "/lab",
        label: "实验室管理",
        icon: "postcard",
        authority: 1
      },
      {
        path: "/addachieve",
        label: "成绩录入",
        icon: "right",
        authority: 2
      },
      {
        path: "/search",
        label: "成绩查询",
        icon: "search",
        authority: 3
      }
    ]
  },
  mutations: {
    SignIn(state, val) {
      state.username = String(val.username);
      state.userauthority = Number(val.auth);
      for (var i in state.asideMenu) {
        if (
          state.asideMenu[i].authority == val.auth ||
          state.asideMenu[i].authority == 3
        )
          state.randerList.push(state.asideMenu[i]);
      }
    },
    SignOut(state) {
      state.username = "";
      state.userauthority = 0;
      state.asideMenu = [];
    }
  },
  actions: {}
};
