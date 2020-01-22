<template>
  <div class="layout-wrap">
    <div :class="[playingSongUrl?'pb60':'']"><router-view /></div>
    <player v-if="playingSongUrl"></player>
  </div>

</template>

<script>
  import {mapState} from 'vuex'
  import player from '../components/player'
  export default {
    name: "layout",
    components:{
      player
    },
    computed:{
      ...mapState({
        playingSongUrl:state => state.song.playingSongUrl
      })
    }
  }
</script>

<style lang="stylus">
.pb60
  padding-bottom: 100px
</style>
