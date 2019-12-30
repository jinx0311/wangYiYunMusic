<template>
  <div class="hello">
    <div class="nav">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item  v-for="(item,index) in banners" :key="index"><img :src="item.pic" alt="" /></van-swipe-item>
      </van-swipe>
    </div>
    <div class="nav-list">
      <van-row type="flex" justify="space-around">
        <van-col span="4"><div><div class="img-wrap"></div>每日推荐</div></van-col>
        <van-col span="4"><div><div class="img-wrap"></div>歌单</div></van-col>
        <van-col span="4"><div><div class="img-wrap"></div>排行榜</div></van-col>
        <van-col span="4"><div><div class="img-wrap"></div>电台</div></van-col>
        <van-col span="4"><div><div class="img-wrap"></div>直播</div></van-col>
      </van-row>
    </div>
    <div class="song-menu-wrap">
      <div class="song-menu-title">
        推荐歌单 <span class="song-menu-ground">歌单广场</span>
      </div>
      <div class="song-menu-content">
        <van-row justify="space-around" gutter="5">
          <van-col span="8" v-for="(item,index) in songList" :key="index">
            <div class="img-wrap" :style="{backgroundImage: 'url('+item.picUrl+')'}"></div>
            <div class="text-div van-multi-ellipsis--l2">{{item.name}}</div>
          </van-col>
        </van-row>
      </div>
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
        banners:[],
        songList:'',
      }
    },
    mounted() {
      this.getList()
      this.getRecommendSongList()
    },
    methods:{
      getList(){
          console.log("banner")
        let that=this
          request.ajax('banner')
          .then(function (response) {
            that.banners=response.banners;
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      getRecommendSongList(){
        request.ajax('getRecommendSongList',{
          limit:6
        }).then(res => {
          console.log(res)
          this.songList = res.result
        })
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
    /*padding 0 20px*/
    /*margin-top 20px*/
    /*border-radius 10Px*/
    font-size 20Px/*no*/
    overflow hidden

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
    padding 20px 0
    line-height 60px
    text-align center
    .img-wrap{
      width 100px
      height 100px
      margin 0 auto
      background #e62619
      border-radius 50%
    }
    img{
      display inline-block
      width 20px
      height 20px
    }
  }

  .song-menu-wrap{
    padding 0 20px
    .song-menu-title{
      color: #333333
      font-size 30px
      font-weight bold
      padding 20px 0
      margin-top 10px
      .song-menu-ground{
        float: right
        width 120px
        height 40px
        text-align center
        display inline-block
        border 1Px solid #eee
        line-height 45px
        font-weight normal
        font-size 12px
        border-radius 20px
      }
    }
    .song-menu-content{
      .van-col{
        height 300px
      }
      .text-div{
        line-height 30px
        margin-top 10px
      }
      .img-wrap{
        width 100%
        height 210px
        background-size cover
        border-radius 10px
        overflow hidden
      }
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
