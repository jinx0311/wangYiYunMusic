<template>
  <div class="layout-wrap">
    <router-view />
    <player></player>
  </div>

</template>

<script>
  import player from '../components/player'
  export default {
    name: "layout",
    components:{
      player
    }
  }
</script>

<style scoped>

</style>
