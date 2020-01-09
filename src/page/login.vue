<template>
<div class="login">
  <img src="../assets/logo.png" class="logo" alt="">
  <div class="form">
    <van-cell-group style="    width: 80vw;
    margin-left: 10vw">
      <van-field
        style="margin-bottom: 10px"
        v-model="phone"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$toast('question')"
      />

      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />
    </van-cell-group>
    <van-button plain type="primary"  class="login_button" @click="login">手机号登陆</van-button>
    <van-button plain type="primary"  class="login_button" @click="test">点击数字加1，当前为{{testCount}}</van-button>
    <ul class="button_list">
      <li disabled v-for="item in button_list"> <img :src="item.img" /> </li>
    </ul>
   <div class="agree">


       <van-checkbox v-model="radio" checked-color="#dc2c1d" name="1" style="color: #ffffff" ><span style="color: #fff">同意《用户协议》《隐私政策》《儿童隐私政策》</span></van-checkbox>

   </div>
  </div>
</div>
</template>

<script>
  import request from '../request'
  import wechat from '@/assets/login/微信.png'
  import weibo from '../assets/login/微博.png'
  import qq from '../assets/login/qq.png'
  import wy from '../assets/login/网易支付-01.png'
  import { Toast } from 'vant';
  import { mapState, mapMutations, mapActions } from 'vuex'
  export default {
    name: "login",
    data(){
      return{
        radio:false,
        phone:'15129398890',
        password:'wyy10086',
        userId:'',
        button_list:[
          {
            img:wechat
          },
          {
            img:weibo
          },
          {
            img: qq
          },
          {
            img:wy
          }
        ],

      }
    },
    methods:{
      //console.log("111",this.loginState)
      ...mapActions(['userLogin']),
      ...mapMutations(['updateTestCount']),
      login(){
        this.userLogin({
          phone:this.phone,
          password:this.password
        }).then(res => {
          console.log(res)
          if(res.code == '200'){
            this.$router.push('/')
            this.Logo()
            let id = res.profile.userId
            this.getUserId(id)
          }else{
            Toast(res.msg);
          }
        })
        /*request.ajax('login',{
          phone:this.phone,
          password:this.password
        }).then(res=>{
          console.log(res)
          if(res.code == '200'){
            this.$router.push('/')
              this.Logo()
              let id = res.profile.userId
              this.getUserId(id)
              console.log(this.loginState)
          }else{
              console.log(this)
              Toast(res.msg);

          }
        })*/
      },
      test(){
        this.updateTestCount({})
      },
    },
    mounted() {
      console.log(this.loginState)

    },
    computed:{
      ...mapState({
        loginState:state=>state.loginState,
        testCount: state =>  state.userInfo.testCount
      })
    }
  }
</script>

<style scoped>

  .van-icon{
    display: block;
    box-sizing: border-box;
    width: 1em;
    height: 1em;
    color: transparent;
    font-size: .8em;
    line-height: inherit;
    text-align: center;
    border: 1px solid #fff;
  }

  .van-cell-group{
    background-color: #dc2c1d;
  }
  .van-field{
    height: 1rem;
    display: flex;
    align-items: center;
  }
  .agree{
    display: flex;
    color: #ddd;
    margin: 1rem 0;
    width: 90vw;
    margin-left: 5vw;
  }
  .button_list{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    justify-content: space-between;
    width: 60vw;
    margin-left: 20vw;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
  }
  .button_list img{
    width:.8rem;
    height: .8rem;
  }
  .button_list li{
    width: 1rem;
    height: .8rem;
    padding: 0.1rem 0;
    overflow: hidden;
    text-align: center;
    border: 0.026667rem solid rgba(255,255,255,0.8);
    border-radius: 50%;
  }
  .login_button{
    width: 60vw;
    height: 1rem;
    margin: 1rem auto;
    border-radius: 0.32rem;
    margin-left: 20vw;
    color: #dd2e1d;
  }
  .form{
    position: absolute;
    bottom: 0;
  }
  .logo{
    width: 2rem;
    display: block;
    margin: 0 auto;
    margin-top: 20vh;
  }
.login{
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background-color: #dc2c1d;
}
  .van-radio__label{
    color: #fff !important;
  }
</style>
