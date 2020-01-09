<template>
  <div class="player-wrap">
    <audio
      src="http://m7.music.126.net/20200109121335/98058b9a2c676ecef174919f47591524/ymusic/0fd6/4f65/43ed/a8772889f38dfcb91c04da915b301617.mp3"
      ref="audio"
      autoplay
      controls
    ></audio>
  </div>
</template>

<script>
  export default {
    name: "player"
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
