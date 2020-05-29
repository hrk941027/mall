<!--  -->
<template>
  <div class="login-bg">
    <div class="login">
      <el-form ref="loginFromRef" :model="LoginFrom" :rules="rules" label-width="0px" class="login_from">
        <el-form-item  prop="username">
          <el-input prefix-icon="el-icon-user" v-model="LoginFrom.username" class="btnnn"></el-input>
        </el-form-item>
        <el-form-item  prop="password">
          <el-input prefix-icon="el-icon-lock" v-model="LoginFrom.password" class="btnnn"></el-input>
        </el-form-item>
        <el-form-item class="bnts">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {loginHttp} from '../../network/login'
export default {
  data() {
    return {
      LoginFrom : {
        username:'admin',
        password:'123456',
      },
      rules :{
        username :[
          { required: true, message: '请输入登录名称', trigger: 'blur' },
          { min: 3, max: 12, message: '长度在 3 到 12 的用户名', trigger: 'blur' }
        ],
        password:[
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 的密码', trigger: 'blur' }
        ]
      }
    };
  },
  methods:{
    reset(){
      this.$refs.loginFromRef.resetFields()
    },
    login(){
      this.$refs.loginFromRef.validate(valid =>{  //async
        // console.log(valid);
        if(!valid) return;  //如果校验失败，则return
        // const {data : res} = await this.$http.post('login', this.LoginFrom)
        // console.log(res);
        
        loginHttp(this.LoginFrom).then(res =>{
          console.log(res);
          if (res.meta.status !== 200) return this.$message.error('登录失败！')
          this.$message.success('登录成功')
          window.sessionStorage.setItem("token",res.data.token);//把获取的token值保存到客户端
          this.$router.push('./home')
        })
        
        




        // //   if(res.meta.status === 400) return this.$message.error('登录失败')
        // //   this.$message.success('登录成功');
        // //   //登录成功后，将token保存到客户端sessionStorage中
        // //   //项目中，其他api接口，必须在登录中后才能访问
        // //   //token只在当前网站打开期间生效，所以将TOKEN保存在sessionStorage中
        // //   //通过编程式导航跳转到后台主页，路由地址是/home

      })
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.login-bg {
  background: url(~assets/img/login/login.jpg);
  background-size: cover;
  height: 100vh;
  width: 100%;
  position: absolute;
  display: flex;
  z-index: 9999;
}
.login{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.btns{
  display: flex;
  justify-content: space-between;
}
.btnnn{
  background: none!important;
}
</style>