<template>
  <div class="songList-wrap">
    <div class="info-wrap">
      <div class="info-wrap-top">
        <div class="info-left">
          <img class="img-cover" :src="songListInfo.coverImgUrl" alt="">
        </div>
        <div class="info-right">
          <div class="title">{{songListInfo.name}}</div>
        </div>
      </div>
      <div class="info-wrap-bottom"></div>
    </div>
    <ul class="songList-ul" v-if="songListInfo">
      <li :class="['songList-li',playingSongInfo.id==item.id?'active':'']" @click="playMusic(item)" v-for="(item,index) in songListInfo.tracks" :key="index">
        <div class="li-left">{{index+1}}</div>
        <div class="li-middle">
          <span class="song">{{item.name}}</span><br /><span class="songer">{{item.ar[0].name}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import Request from '../request'
  import {mapState,mapActions} from 'vuex'
  import { Toast } from 'vant';
  export default {
    name: "songList",
    computed:{
      ...mapState({
        songListInfo:state => state.song.songListInfo,
        playingSongInfo:state => state.song.playingSongInfo
      })
    },
    methods:{
      ...mapActions(['getSongList','getSongInfo']),
      playMusic(item){
        Request.ajax('checkSong',{id:item.id}).then(res => {
          if(res && res.success){
            this.getSongInfo({id:item.id}).then( res => {
              console.log(res)
              if(res.data[0].url == null){
                Toast('暂无此歌曲播放信息，请选择其他歌曲~')
              }
            })
          }else{
            Toast(res.message)
          }
        })

      },
      getUser(){
        Request.ajax('subcount').then(res => {
          console.log(res)
        })
      }
    },
    mounted(){
      this.getSongList({id:this.$route.params.songListId})
      this.getUser()
    }
  }
</script>

<style lang="stylus">
.songList-wrap
  .info-wrap
    padding 0 0.5rem
    .info-wrap-top
      height 4rem
      .info-left
        float: left
        width 3rem
        height 4rem
        .img-cover
          width 3rem
          height 3rem
      .info-right
        float: left
        width 6rem
        height 4rem
        .title
          color #333333
          font-size 16Px
          font-weight bold
          padding-left:0.5rem
    .info-wrap-bottom
      width 100%
  .songList-ul
    .songList-li
      height 100px
      padding-left 40px
      &.active
        color #f36
        background #eee
        .li-left
          color #f36
        .li-middle
          .song
            color #f36
      .li-left
        float: left
        width:60px;
        font-size 16Px
        color #555
        line-height 100px
      .li-middle
        padding-top 13px
        float: left
        color #333
        font-size 14Px
        .song
          line-height 30px
        .songer
          color #666
          font-size 12Px
</style>
