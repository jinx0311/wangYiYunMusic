<template>
  <div class="hello">
    <div class="nav">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item  v-for="(item,index) in banners" :key="index"><img :src="item.pic" alt="" /></van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
    import request from '../../request'
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
<style scoped>
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
