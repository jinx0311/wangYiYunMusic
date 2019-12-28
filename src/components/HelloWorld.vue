<template>
  <div class="hello">
      <van-row class="nav">
        <van-col style="text-align: left" span="4" @click="showPopup"><van-icon name="orders-o" /></van-col>
        <ul>
          <li v-for="(item,index,key) in topList" @click="handTpId(index)" :class='{active:index==topLiId}'  >{{item}}</li>
        </ul>
        <van-col style="text-align: right" span="4"><van-icon name="search" /></van-col>
      </van-row>
      <van-popup class="popupBg" v-model="popup" position="left">
        <p style="font-size: 0.1rem;margin: 0 2.5%">登陆网易云音乐</p>
        <p style="font-size: 0.1rem;margin: 0 2.5%">手机电脑多端同步，尽享海量高品质音乐</p>
        <van-button class="log_button" round type="info">立即登录</van-button>
        <van-row class="myList">
          <van-col span="6">
            <van-icon name="envelop-o" size="1.5rem" color="rgb(246,209,122)" />
            <span>我的消息</span>
          </van-col>
          <van-col span="6">
            <van-icon name="friends-o" size="1.5rem" color="rgb(246,209,122)"  />
            <span>我的好友</span>
          </van-col>
          <van-col span="6">
            <van-icon name="service-o" size="1.5rem" color="rgb(246,209,122)"  />
            <span>听歌识曲</span>
          </van-col>
          <van-col span="6">
            <van-icon name="flower-o" size="1.5rem" color="rgb(246,209,122)"  />
            <span>个性装扮</span>
          </van-col>
        </van-row>
        <ul class="popup_ul1">
          <li class="popup_list1" v-for="item in popup_list1">
            <div>
              <van-icon :name="item.icon" size="1rem" />
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
        },
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
      topList:['我的','发现','云村','视频'],
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
    },
    showPopup() {
      this.popup = true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .pup_bottom{
    position: absolute;
    bottom: 0;
    width: 100%;
    background: #000000;
    display: flex;
    line-height: 1.2rem;
    justify-content: space-between;
  }
  .popupBg{
    padding: 0 0.25%;
    height:100%;
    width: 85%;
    background: black;
    color:#ffffff;
    padding-top: 30px;
  }
  .popup_ul1{
    border-top: 1px solid rgba(255,255,255,0.6);
    margin: 0 2.5%;
  }
  .listInfo{
    width: 61%;
    font-size: 0.5rem !important;
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
    justify-content: space-between;
  }
  .popup_list1 span{
    margin-left: 5px;
    font-size: 0.96rem;
  }
  .myList .van-col{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    font-size: 0.5rem;
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
    border: 1px solid rgba(255,255,255,0.6);
    height: 30px;
    line-height: 30px;
    font-size: 0.5rem;
    margin-top: 20px;
    width: 40%;
  }
.van-overlay{
  background: red !important;
  opacity: 0.3;
}
.active{
  font-size: 1.2rem;
  color: #ffffff;
  font-weight: 800;
}
.nav{
  background: #000;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 2.5%;
  font-size: 1rem;
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
