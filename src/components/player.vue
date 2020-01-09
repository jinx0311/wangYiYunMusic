<template>
  <div class="player-wrap">
    <audio
      :src="playingSongInfo.url"
      ref="audio"
      autoplay
      controls
    ></audio>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "player",
    computed:{
      ...mapState({
        playingSongInfo:state => state.song.playingSongInfo
      })
    }
  }
</script>

<style lang="stylus">
.player-wrap
  position fixed
  width 100%
  height 60px
  bottom 60px
  left 0
  background rgba(0,0,0,0.6)
</style>
