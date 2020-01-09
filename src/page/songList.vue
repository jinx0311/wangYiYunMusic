<template>
  <div class="songList-wrap">
    <ul class="songList-ul" v-if="songListInfo">
      <li :class="['songList-li',playingSongInfo.id==item.id?'active':'']" @click="playMusic(item)" v-for="(item,index) in songListInfo.tracks" :key="index">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
  import {mapState,mapActions} from 'vuex'
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
        this.getSongInfo({id:item.id})
      }
    },
    mounted(){
      console.log(this.$route)
      this.getSongList({id:this.$route.params.songListId})
      console.log(this.songListInfo)
    }
  }
</script>

<style lang="stylus">
.songList-wrap
  .songList-ul
    .songList-li
      line-height 80px
      padding-left 40px
      &.active
        color #f36
        background #eee
</style>
