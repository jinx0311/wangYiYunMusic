<template>
<div>
  <input type="text" v-model="phone">
  <input type="password" v-model="password">
  <button @click="login">登录</button>
  <button @click="test">测试</button>
</div>
</template>

<script>
  import request from '../request'
  export default {
    name: "login",
    data(){
      return{
        phone:'13839744684@163.com',
        password:'qwe123012W',
      }
    },
    methods:{
      login(){
        request.ajax('login',{
          email:this.phone,
          password:this.password
        }).then(res=>{
          console.log(res)
        })
      },
      test(){
        request.ajax('getUserInfo').then(res=>{
          console.log(res)
        })
      }
    }
  }
</script>

<style scoped>

</style>
