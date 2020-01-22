<template>
  <div class="songListUl-wrap">
    <template v-if="songList">
      <van-row justify="space-around" gutter="5">
        <van-col span="8" v-for="(item,index) in songList" :key="index" @click="enterSongList(item)">
          <div class="img-wrap" :style="{backgroundImage: 'url('+(item.picUrl||item.coverImgUrl)+')'}"></div>
          <div class="text-div van-multi-ellipsis--l2">{{item.name}}</div>
        </van-col>
      </van-row>
    </template>
    <template v-else>
      <div class="loading-wrap"><van-loading size="24px" color="#dd001b">加载中...</van-loading></div>
    </template>
  </div>
</template>

<script>
  export default {
    name: "songListUl",
    props:['songList'],
    methods:{
      enterSongList(params){
        this.$router.push('/songList/'+params.id)
      },
    }
  }
</script>

<style lang="stylus">
  .songListUl-wrap{
    .van-col{
      height 320px
    }
    .text-div{
      line-height 30px
      margin-top 10px
    }
    .img-wrap{
      width 100%
      height 230px
      background-size cover
      border-radius 10px
      overflow hidden
    }
    .loading-wrap{
      text-align center
      color #dd001b
      margin-top 30px
    }
  }
</style>
