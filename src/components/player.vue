<template>
  <div :class="['player-wrap',showFull?'showFull':'']">
    <div class="full-wrap" v-if="showFull">
      <div class="title">
        <span class="close" @click="checkFull">关闭</span><span>{{playingSongInfo.name}}</span>
      </div>
      <div class="song-img-wrap">
        <img class="song-img" :src="playingSongInfo.al.picUrl" alt="">
      </div>
      <div class="control-wrap">
        <span @click="preSong">上一首</span> <span @click="playAudio">{{playStatus?'播放':'暂停'}}</span> <span @click="nextSong">下一首</span>
      </div>
    </div>
    <div class="easy-wrap" v-if="!showFull" @click="checkFull">
      <span style="float: left;">{{playingSongInfo.name}}</span><span style="margin-right: 20px" @click.stop="playAudio">{{playStatus?'播放':'暂停'}}</span><span @click.stop="showList">播放列表</span>
    </div>
    <van-popup
      v-model="showPopup"
      position="bottom"
      :style="{ maxHeight: '50%' }"
    >
      <ul class="songList-ul" v-if="songListInfo">
        <li :class="['songList-li',playingSongUrl?(playingSongUrl.id==item.id?'active':''):'']" @click="playMusic(item)" v-for="(item,index) in songListInfo.tracks" :key="index">
          <div class="li-left">{{index+1}}</div>
          <div class="li-middle">
            <span class="song">{{item.name}}</span><span class="songer">{{item.ar[0].name}}</span>
          </div>
        </li>
      </ul>
    </van-popup>
    <audio
      :src="playingSongUrl.url"
      ref="audio"
      id="audioPlay"
      autoplay
    ></audio>
  </div>
</template>

<script>
  import {mapState,mapActions} from 'vuex'
  import Request from '../request'
  import {Toast} from 'vant'
  import { Popup } from 'vant';
  export default {
    name: "player",
    computed:{
      ...mapState({
        playingSongInfo:state => state.song.playingSongInfo,
        playingSongUrl:state => state.song.playingSongUrl,
        songListInfo:state => state.song.songListInfo,
      }),
    },
    watch:{
      playingSongUrl(params){
        console.log('1111')

        if(this.playingSongUrl && this.playingSongUrl.url) {
          this.playStatus = false
          const audio = document.getElementById('audioPlay');
          audio.addEventListener('ended',  () => {
            this.preSong()
          }, false);
        }
      },
    },
    data(){
      return{
        showFull:false,
        playStatus:true,
        showPopup:false,
      }
    },
    methods:{
      ...mapActions(['getSongList','getSongInfo','getSongUrl']),
      checkFull(){
        this.showFull = !this.showFull
      },
      playAudio(){
        const audio = document.getElementById('audioPlay');
        if(audio!==null){
          this.playStatus = !this.playStatus
          if(audio.paused){
            audio.play()
          }else{
            audio.pause()
          }
        }
      },
      nextSong(){
        let current = 0
        console.log(this.songListInfo)
        this.songListInfo.tracks.forEach((item,index) => {
          if(item.id == this.playingSongUrl.id){
            if(index == this.songListInfo.tracks.length-1){
              current = 0
            }else{
              current = index+1
            }

          }
        })
        let obj = this.songListInfo.tracks[current]
        this.getPlaySongInfo(obj)
      },
      preSong(){
        let current = 0
        this.songListInfo.tracks.forEach((item,index) => {
          if(item.id == this.playingSongUrl.id){
            if(index == 0){
              current = this.songListInfo.tracks.length-1
            }else{
              current = index-1
            }
          }
        })
        let obj = this.songListInfo.tracks[current]
        this.getPlaySongInfo(obj)
      },
      playMusic(params){
        this.getPlaySongInfo(params)
      },
      getPlaySongInfo(params){
        Request.ajax('checkSong',{id:params.id}).then(res => {
          if(res && res.success){
            this.getSongUrl({id:params.id}).then( res => {
              console.log(res)
              if(res.data[0].url == null){
                Toast('暂无此歌曲播放信息，请选择其他歌曲~')
              }
            })
            this.getSongInfo({id:params.id}).then( res => {
              /*if(res.data[0].url == null){
                Toast('暂无此歌曲播放信息，请选择其他歌曲~')
              }*/
            })
          }else{
            Toast(res.message)
          }
        })
      },
      showList(){
        this.showPopup = true
      }
    }
  }
</script>

<style lang="stylus">
.player-wrap
  position fixed
  width 100%
  height 100px
  bottom 0
  left 0
  background rgba(0,0,0,0.6)
  transition: all 0.2s;
  &.showFull
    height 100vh
    background #000000
    bottom 0
  .full-wrap
    color #fff
    .title
      text-align center
      margin-top 40px
      .close
        float: left
    .song-img-wrap
      text-align center
      margin-top 80px
      .song-img
        width 400px
        height 400px
        border-radius 50%
    .control-wrap
      text-align center
  .easy-wrap
    height 100px
    background #fff
    line-height 100px
    text-align right
    border-top 1Px solid #eee
  .songList-ul
    .songList-li
      height 100px
      overflow hidden
      border-bottom 1Px solid #eee
      line-height 100px
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
        font-size 14Px
        color #555
        padding-left 20px
        text-align left
      .li-middle
        float: left
        width 650px
        color #333
        font-size 14Px
        .song
          line-height 100px
        .songer
          line-height 100px
          margin-left 20px
          color #666
          font-size 12Px
</style>
