<template>
    <div class="big">
      <van-swipe class="my-swipe hotWallList" :autoplay="110000" indicator-color="white">
        <van-swipe-item :key="index"  v-for='(item,index) in hotWall'>
            <div class="userInfo">
                <img :src="item.simpleUserInfo.avatar" alt="">
            </div>
            <p class="content">
                {{item.content}}
            </p>
            <p class="content">
                {{item.simpleResourceInfo.name}}
            </p>
        </van-swipe-item>
      </van-swipe>
    </div>
</template>

<script>
import {mapState,mapActions,mapMutations} from 'vuex'
    export default {
        name: "YunCun",
        data(){
            return{

            }
        },
        methods:{
            ...mapActions(['gethotWall'])
        },
        computed:{
            ...mapState({
                hotWall:state=>state.find.hotWall.data
            })
        },
        mounted(){
            this.gethotWall()
            console.log(this.hotWall)
        }
    }
    
</script>

<style scoped lang="stylus">
.big{
    flex auto
}
.userInfo img{
    width 1.5rem
    height 1.5rem
    border-radius 50%
}
.hotWallList{
    display flex
    flex-direction column
    overflow hidden
    box-sizing border-box
    height 100%
}
.hotWallList .van-swipe-item{
    padding 0.3rem
    background #eee
}
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  .my-swipe .van-swipe-item {
    box-sizing border-box
    flex 1
    background #bbbbbb
    color #fff
  }
  .content{
      line-height 1rem
      text-align left
  }
</style>
