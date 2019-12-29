<template>
  <div class="hello">
    <div class="nav">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item  v-for="(item,index) in banners" :key="index"><img :src="item.pic" alt="" /></van-swipe-item>
      </van-swipe>
    </div>
    <div class="nav-list">
      <van-row type="flex" justify="space-around">
        <van-col span="4">
          <div>
            <div class="img-wrap"></div>
            <br/>每日推荐</div>
        </van-col>
        <van-col span="4"><div><img src="" alt="歌单"><br/>歌单</div></van-col>
        <van-col span="4"><div><img src="" alt="排行榜"><br/>排行榜</div></van-col>
        <van-col span="4"><div><img src="" alt="电台"><br/>电台</div></van-col>
        <van-col span="4"><div><img src="" alt="直播"><br/>直播</div></van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
  import request from '../request'
  import axios from 'axios'

  export default {
    name: 'Find',
    data () {
      return {
        nav:[],
        banners:[]
      }
    },
    mounted() {
      this.getList()
    },
    methods:{
      getList(){
          console.log("banner")
        let that=this
          request.ajax('banner')
          .then(function (response) {
            console.log(response.data.banners);
            that.banners=response.data.banners;
            console.log(that.banners)
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .nav img{
    width: 100%;
    height: 25vh;
  }
  .nav{
    background: #000;
  }
  .logo{
    height: 80%;
  }
  .nav-list{
    width 750px
    overflow hidden
    font-size 12px
    color #666
    margin-top 10px
    border-bottom  1px solid #eee
    .img-wrap{
      width 150px
      height 150px
      margin 0 auto
      background #e62619
    }
    img{
      display inline-block
      width 20px
      height 20px
    }
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
