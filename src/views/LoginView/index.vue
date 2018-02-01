<!-- Created by nnie on 2018/1/22. -->
<template>
  <div class="login-box">
    <div class="login-pic">
      <img src="../../assets/person.png"/>
    </div>
    <div class="login-form">
      <Group>
        <XInput title="账户" type="text" v-model="account" :show-clear="false"></XInput>
        <XInput title="密码" type="password" v-model="password" :show-clear="false"></XInput>
      </Group>
    </div>
    <div class="login-action">
      <XButton type="primary" @click.native="loginSys">登录</XButton>
    </div>
  </div>
</template>

<script>
  import { XButton, Group, XInput } from 'vux'
  export default {
    name: 'login',
    components: { XButton, Group, XInput },
    data () {
      return {
        account: 'admin',
        password: '12345'
      }
    },
    methods: {
      loginSys () {
        this.$store.dispatch('LOGIN', {account: this.account, password: this.password}).then(res => {
          if (res.data.code === '000000') {
            this.$router.push('/resource')
          } else {
            alert(res.data.msg)
          }
        })
      }
    }
  }
</script>

<style>
  .login-box{
    position: fixed;
    width: 100%;
    height: 100%;
    background-size: 100%;
    background-image: url('../../assets/login.png');
  }
  .login-pic{
    margin-top: 30%;
    text-align: center;
  }
  .login-pic img{
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }
  .login-form{
    width: 80%;
    margin: 15% auto 0;
  }
  .login-form .weui-cell, .login-form .weui-cell div, .login-form .weui-cell input{
    height: 0.7rem;
    line-height: 0.7rem;
  }
  .login-form .weui-cells, .login-form input, .login-form div{
    background: transparent;
  }
  .login-form .weui-cells:before, .login-form .weui-cell:before{
    border-top: 1px solid white;
  }
  .login-form .weui-cells:after{
    border-bottom: 1px solid white;
  }
  .login-action{
    width: 30%;
    margin: 15% auto 0;
  }
</style>
