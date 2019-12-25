<template>
  <div class="hello">
      <van-row class="nav">
        <van-col style="text-align: left" span="4" @click="showPopup"><van-icon name="orders-o" /></van-col>
        <ul>
          <li v-for="(item,index,key) in topList" @click="handTpId(index)" :class='{active:index==topLiId}'  >{{item}}</li>
        </ul>
        <van-col style="text-align: right" span="4"><van-icon name="search" /></van-col>
      </van-row>
      <van-popup overlay-class="popupBg" v-model="popup" position="left" style="height:100%;width: 70%;background: black;color:#ffffff;">
        <p style="font-size: 0.5rem">登陆网易云音乐</p>
        <p style="font-size: 0.5rem">手机电脑多端同步，尽享海量高品质音乐</p>
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
      </van-popup>
    <van-list
      v-model="loading"
    >
      <van-cell
        v-for="item in list"
        :key="item"
        :title="item.title"
        :icon="item.icon"
      />
    </van-list>
      <router-view />
  </div>
</template>

<script>
  import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
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
  mounted() {
    this.getList()
  },
  methods:{
    getList(){
      let that=this
      axios.get('http://localhost:3000/banner?type=1')
        .then(function (response) {
          console.log(response.data.banners);
          that.banners=response.data.banners;
          console.log(that.banners)
        })
        .catch(function (error) {
          console.log(error);
        });
    },
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
  .myList .van-col{
    margin-top: 20px;
    display: flex;

    flex-direction: column;
    font-size: 0.5rem;
  }
  .myList{
    margin: 0 2.5%;
    border-bottom: 1px solid rgba(255,255,255,0.6);
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
