<template>
  <div class="login_container">
    <div>
      <div class="login_title">
        <span class="go_back" @click="go_back()">
          <img src="@/assets/personal/houtui.png" alt="图片加载失败" />
        </span>
      </div>

      <div class="login_bcground">
        <div class="login_logo">
          <img src="@/assets/icon@2x.png" />
        </div>
        <img src="@/assets/beijing_shang.png" />
      </div>
    </div>

    <div class="login_bottom" v-if="register">
      <van-cell-group>
        <van-field
          label="用户名"
          v-model="usname"
          right-icon="question-o"
          placeholder="请输入用户名"
          @touchstart.native.stop="show = true"
          @click-right-icon="$toast('question')"
        />

        <van-field type="password" label="密码" v-model="psword" placeholder="请输入密码" />
      </van-cell-group>

      <div class="bottom_middle" @click="go_register()">
        <span>注册</span>
      </div>

      <van-button type="primary" size="large" @click="login()">登录</van-button>
    </div>

    <div class="register" v-else>
      <van-cell-group>
        <van-field
          label="用户名"
          v-model="set_username"
          right-icon="question-o"
          placeholder="请输入用户名"
          @click-right-icon="$toast('question')"
        />
        <van-field label="手机号" placeholder="请输入手机号" />
        <van-field type="password" label="密码" v-model="set_password" placeholder="请您输入密码" />
        <van-field type="password" label="确认密码" v-model="set_password_x" placeholder="请您再次输入密码" />
      </van-cell-group>
      <div>
        <van-button type="primary" size="large" @click="sure_register()">注册</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "load",
  data() {
    return {
      register: true,
      show: false,
      value: "",
      psword: "",
      usname: "",
      set_username: "",
      set_password: "",
      set_password_x: ""
    };
  },

  methods: {
    go_register() {
      this.register = !this.register;
    },

    go_back() {
      this.$router.go(-1);
    },

    //登录
    login() {
      if (
        this.$store.state.username == this.usname &&
        this.$store.state.password == this.psword
      ) {
        sessionStorage.setItem("login", true);
        //跳转到指定页面
        this.$router.push(this.$route.query.redirect);
      } else if (this.$store.state.username != this.usname) {
        window.console.log("用户名不存在");
      } else if (this.$store.state.password != this.psword) {
        window.console.log("密码错误");
      } else {
        window.console.log("未知错误");
      }
    },

    //注册
    sure_register() {
      if (this.set_password != this.set_password_x) {
        window.console.log("两次密码输入不同请重新输入");
      } else {
        let new_username = this.set_username;
        const new_password = this.set_password;

        this.$store.commit("setUserName", new_username);
        this.$store.commit("setPassWord", new_password);
        window.console.log("注册成功");
        this.register = !this.register;
      }
    }
  }
};
</script>

<style scoped lang='less'>
.login_container {
  .login_title {
    background: #5fd2a9;
    position: relative;
    height: 40px;
    padding: 0 15px;
    span {
      position: absolute;
      top: 10px;
      left: 8px;
    }
  }
}
/* .login_title > div {
  text-align: center;
  line-height: calc(100vh - 115px);
} */

.login_logo {
  position: absolute;
  width: 100%;
  text-align: center;
  height: 130px;
  line-height: 130px;
  img {
    width: 60px;
    border-radius: 5px;
    vertical-align: middle;
  }
}

.login_bottom {
  padding: 0 50px;
}

.bottom_middle {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 16px;
  overflow: hidden;
  color: #5dd0a5;
  font-size: 14px;
  line-height: 24px;
  background-color: #fff;
}

.van-button--large {
  height: 40px;
  line-height: 40px;
  border-radius: 25px;
  margin: 20px 0;
}

.register {
  padding: 0 50px;
}
</style> 