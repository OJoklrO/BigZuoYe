<template>
  <div class="ban">
    <el-card class="login_title"  v-if="show_flag">
      <span class="title">用户登录</span>
      <div class="banner1">
        <span>用户名</span>
        <el-input v-model="user_name" placeholder="请输入账号"></el-input>
      </div>
      <div class="banner2">
        <span>密码</span>
        <el-input
          placeholder="请输入密码"
          v-model="password"
          show-password
        ></el-input>
      </div>
      <div class="btn_banner">
        <el-button size="small" round @click="login">登录</el-button>
        <el-button size="small" round @click="zhuce_1">注册</el-button>
      </div>
    </el-card>
    <el-card class="zhuce_title"  v-else>
      <span class="title">新用户注册</span>
      <div class="banner1">
        <span>用户名</span>
        <el-input v-model="new_username" placeholder="请输入账号"></el-input>
      </div>
      <div class="banner2">
        <span>新密码</span>
        <el-input
          placeholder="密码不能为空"
          v-model="new_passwd_1"
          show-password
        ></el-input>
      </div>
      <div class="banner2">
        <span>新密码确认</span>
        <el-input
          placeholder="密码不能为空"
          v-model="new_passwd_2"
          show-password
        ></el-input>
      </div>
      <div class="btn_banner_zhuce">
        <el-button size="small" round @click="zhuce_2">注册并登录</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  export default {
    data() {
      return {
        visible:true,
        user_name: '',
        password : "",
        show_flag:true,
        // 注册页面绑定变量
        new_username:"",
        new_passwd_1:"",
        new_passwd_2:""
      }
    },
    computed:{
        ...mapState({userList: state=>state.user.userList})
    },
    methods:{
      login(){
      },
      zhuce_1(){
        // 隐藏登录界面，换到注册界面
        this.show_flag=false
      },
      zhuce_2(){
        // 判断两个密码是否为空以及是否相等
        
        // 不相等时的会话框
        this.dialog_message()

        // 注册成功时隐藏注册界面，显示登录弹框
        this.show_flag=true
        this.new_username=this.new_passwd_1=this.new_passwd_2=""
      },
      dialog_message(){
        this.$message({
          message: '密码不符合要求',
          type: 'warning'
        });
      }
    }
  };
</script>

<style lang="scss">
.ban{
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 50px;
}
.login_title,
.zhuce_title {
  width: 400px;
  height: 280px;
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  font-weight: bolder;
  font-size: larger;
  // margin-left: 400px;
  // margin-top: 50px;
}
.zhuce_title{
  height: 360px;
  width: 400px;
}
.el-card__body {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bolder;
  flex-direction: column;
}
.banner1,
.banner2 {
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
  width: 100%;
}
.banner2 {
  margin-top: 0;
}
.banner1 input,
.banner2 input {
  width: 250px;
}
.banner1 span,
.banner2 span {
  width: 150px;
  line-height: 40px;
}
.btn_banner {
  display: flex;
  justify-content: space-between;
  width: 200px;
  margin-top: 10px;
}
.btn_banner_zhuce{
  display: flex;
  justify-content: space-around;
  width: 200px;
}
</style>
