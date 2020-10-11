<template>
  <div>
    <el-card class="login_title" :visible.sync="visible">
      <span class="title">用户登录</span>
      <div class="banner1">
        <span>用户名</span>
        <el-input v-model="user_name" placeholder="请输入账号"></el-input>
      </div>
      <div class="banner2">
        <span>密码</span>
        <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
      </div>
      <div class="btn_banner">
        <el-button size="small" round @click="login">登录</el-button>
        <el-button size="small" round>注册</el-button>
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
        password : ""
      }
    },
    computed:{
        ...mapState({userList: state=>state.user.userList})
    },
    methods:{
      login(){
        // 如果密码用户名正确则正常登录
        // this.visible=false
        // console.log(this.$router)
        // this.$router.push({ path:'course'  })
        // console.log(this.userList)
        var flag=false
        for(var item in this.userList){
          // console.log(item)
          if( this.userList[item].userName==this.user_name && this.userList[item].password==this.password){
            this.$router.push({ path:'course'  })
            console.log("登录成功")
            flag=true
            break
          }
        }
        if(flag==false){
          alert("登陆失败")
          this.user_name=''
          this.password=''
        }

        // 用户名不存在
        //alert("用户名不存在 , 请先注册")
        // 密码错误
        //alert("密码错误")
      }
    }
  }
</script>

<style lang="scss">
.login_title{
  width: 400px;
  height: 280px;
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  font-weight: bolder;
  font-size: larger;
  margin-left: 400px;
  margin-top: 50px;
  
}
.el-card__body{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bolder;
  flex-direction: column;
}
.banner1,.banner2{
  display: flex;
  justify-content: space-around;
  margin: 30px 0;
}
.banner2{
  margin-top: 0;
}
.banner1 input,.banner2 input{
  width: 250px;
}
.banner1 span,.banner2 span{
  width: 100px;
  line-height: 40px;
}
.btn_banner{
  display: flex;
  justify-content: space-between;
  width: 200px;
  margin-top: 10px;
}
</style>
