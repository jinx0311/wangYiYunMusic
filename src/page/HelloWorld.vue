<template>
  <div class="hello">
      <van-row class="nav">
        <van-col style="text-align: left;padding-top: 10px" span="4" @click="showPopup"><van-icon name="orders-o" size=".6rem" /></van-col>
        <ul class="topList">
          <li v-for="(item,index,key) in topList" :key="index" @click="handTpId(index)" :class='{active:index==topLiId}'  ><router-link :to="item.url">{{item.title}}</router-link></li>
        </ul>
        <van-col style="text-align: right;padding-top: 10px" span="4"><van-icon name="search" size=".6rem" /></van-col>
      </van-row>
      <van-popup class="popupBg" v-model="popup" position="left">
        <div v-if="userInfo">
          <p>这是用户信息</p>
          <img width="100" height="100" :src="userInfo.profile.avatarUrl" alt="">
          <p>{{userInfo.profile.nickname}}</p>
          <p>{{userInfo.level}}</p>
        </div>
       <div v-if="!loginInfo">
         <p style="font-size: 0.1rem;margin: 0 2.5%;text-align: center">登陆网易云音乐</p>
         <p style="font-size: 0.1rem;margin: 0 2.5%;text-align: center">手机电脑多端同步，尽享海量高品质音乐</p>
         <van-button class="log_button" round center type="info" @click="toLogin">立即登录</van-button>
       </div>
        <van-row class="myList">
          <van-col span="6">
            <van-icon name="envelop-o" size="1rem" color="rgb(255,70,56)" />
            <span>我的消息</span>
          </van-col>
          <van-col span="6">
            <van-icon name="friends-o" size="1rem" color="rgb(255,70,56)"  />
            <span>我的好友</span>
          </van-col>
          <van-col span="6">
            <van-icon name="service-o" size="1rem" color="rgb(255,70,56)"  />
            <span>听歌识曲</span>
          </van-col>
          <van-col span="6">
            <van-icon name="flower-o" size="1rem" color="rgb(255,70,56)"  />
            <span>个性装扮</span>
          </van-col>
        </van-row>
        <ul class="popup_ul1">
          <li class="popup_list1" v-for="item in popup_list1">
            <div>
              <van-icon :name="item.icon" size=".6rem" />
              <span>{{item.title}}</span>
            </div>
            <div style="width:40%;display: flex;justify-content: space-between">
              <span class="listInfo">{{item.info}}</span>
              <van-image
                v-if="item.img"
                round
                width="1.2rem"
                height="1.2rem"
                :src="item.img"
              />
            </div>
          </li>
        </ul>
        <ul class="popup_ul1">
          <li class="popup_list1" v-for="item in popup_list2">
            <div>
              <van-icon :name="item.icon" size="1rem" />
              <span>{{item.title}}</span>
            </div>
          </li>
        </ul>
        <div class="pup_bottom">
          <van-button color="rgb(0,0,0,0)"><van-icon name="closed-eye" size="1.2rem" /><span>夜间模式</span></van-button>
          <van-button color="rgb(0,0,0,0)"><van-icon name="setting-o" size="1.2rem" /><span>设置</span></van-button>
          <van-button color="rgb(0,0,0,0)"><van-icon name="close" size="1.2rem" /><span>退出</span></van-button>
        </div>
      </van-popup>
      <router-view />
  </div>
</template>

<script>
  import axios from 'axios'
  import {mapMutations,mapState,mapActions} from 'vuex'
  import request from '../request'
  import {Toast} from "vant";
  export default {
  name: 'HelloWorld',
  data () {
    return {
      popup_list1:[
        {
          icon:'point-gift-o',
          title:'演出',
          info:'ipx7真无线6折赶快抢购吧',
          img:'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1225597740,615370700&fm=111&gp=0.jpg'
        },
        {
          icon:'shopping-cart-o',
          title:'商城'
        },
        {
          icon:'aim',
          title:'附近的人',
          info:'扫一扫附近的人在哪里',
          img:'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1225597740,615370700&fm=111&gp=0.jpg'
        },
        {
          icon:'fire-o',
          title:'游戏推荐'
        },
        {
          icon:'music-o',
          title:'口袋彩铃'
        }
      ],
      popup_list2:[
        {
          icon:'shopping-cart-o',
          title:'我的订单'
        },
        {
          icon:'shopping-cart-o',
          title:'定时停止播放'
        },
        {
          icon:'shopping-cart-o',
          title:'扫一扫'
        },

        {
          icon:'fire-o',
          title:'音乐闹钟'
        },
        {
          icon:'music-o',
          title:'在线听歌免流量'
        },
        {
          icon:'shopping-cart-o',
          title:'优惠券'
        },
        {
          icon:'shopping-cart-o',
          title:'青少年模式'
        }
      ],
      loading:true,
      nav:[],
      banners:[],
      topList:[
          {
              title:'我的',
              url:'my'
          },
          {
              title:'发现',
              url:'find'
          },
          {
              title:'云村',
              url:'yuncun'
          },
          {
              title:'视频',
              url:'myvideo'
          },

      ],
      topLiId:1,
      popup:true,
      list:[
        {
          icon:'video-o',
          title:'演出'
        },
        {
          icon:'shop-o',
          title:'商城'
        },
        {
          icon:'aim',
          title:'附近的人'
        },
        {
          icon:'other-pay',
          title:'游戏推荐'
        },
        {
          icon:'music-o',
          title:'口袋彩铃'
        },
      ]
    }
  },
  methods:{
    handTpId(index){
      this.topLiId=index;
      console.log(this.$route.path)
    },
    showPopup() {
      this.popup = true;
    },
    toLogin() {
      this.$router.push('/login')
    },
    getUser(){
      this.getUserInfo({id:this.loginInfo.account.id}).then(res => {

      })
    },
    ...mapActions(['getUserInfo'])
  },
    computed:{
      ...mapState({
        loginInfo:state => state.userInfo.loginInfo,
        userInfo:state => state.userInfo.userInfo,
      })
    },
    mounted() {

      if(this.loginInfo){
        this.getUser()
      }

    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .topList{
    width: 54%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  li a{
    color:#000000;
    background #fff
  }
  .pup_bottom{
    position: absolute;
    bottom: 0;
    width: 100%;
    background: #ffffff;
    display: flex;
    line-height: 1.2rem;
    justify-content: space-between;
  }
  .popupBg{
    padding: 0 0.25%;
    height:100%;
    width: 85%;
    background: #fff;
    color:#000;
    padding-top: 1.2rem;
  }
  .popup_ul1{
    border-top: 1px solid rgba(255,255,255,0.6);
    margin: 0 2.5%;
  }
  .listInfo{
    width: 61%;
    font-size: 0.3rem !important;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 0.8rem;
    white-space: nowrap;
  }
  .popup_list1{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 20px 0;
    padding: 0 2.5%;
    font-size:0.5rem;
    justify-content: space-between;
  }
  .popup_list1 span{
    margin-left: 5px;
    font-size: 0.4rem;
    position:relative;
  }
  .myList .van-col{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    font-size: 0.2rem;
    justify-content center;
    align-items center
  }
  .myList{
    margin: 0 2.5%;
    padding-bottom: 20px;
  }
  .van-grid-item__text{
    color: #ffffff;
  }
  .log_button{
    background-color: rgba(0,0,0,0);
    border: 0.02rem solid #bbb;
    height: .8rem;
    color: #000;
    font-size: 0.4rem;
    margin-top: 0.266667rem;
    width: 40%;
    margin: 0.3rem auto;
    margin-left: 30%;
  }
.van-overlay{
  background: red !important;
  opacity: 0.3;
}
.active{
  font-size: 38px;
  color: #ffffff;
  font-weight: 800;
}
.nav{
  background: #fff;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 2.5%;
  font-size: 28px;
}


h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
