<template>
    
    <div>
         <header>
      <div style='display:flex;align-items:center' >
        <van-icon style='margin-right:0.2rem' name="arrow-left" @click='back()' />
        <span>我的好友</span>
      </div>
      <van-icon size name="search" size="0.6rem" />
    </header>
        <ul class="title">
            <li v-for='(item,key) in title' :class="{big:key==changeNum}" @click='changeCont(key)' >
                {{item}}
            </li>
        </ul>
       <hr color='#eee' size='1px' />
       <ul class="oneList" v-show="changeNum==0">
           <li v-for="item in follows">
               <img :src="item.avatarUrl" alt="">
               {{item.nickname}}
           </li>
       </ul>
       <ul class="oneList" v-show="changeNum==1">
            <li v-for="item in followeds">
               <img :src="item.avatarUrl" alt="">
               {{item.nickname}}
           </li>
       </ul>
    </div>
</template>
<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
    name:'myFriend',
    data(){
        return{
            changeNum:0,
            title:['关注','粉丝']
        }
    },
    methods:{
        ...mapActions(['getFollows','getFolloweds']),
        back(){
            this.$router.go(-1)
        },
        changeCont(id){
            this.changeNum=id
        }
    },
    computed:{
        ...mapState({
            follows:state=>state.userInfo.follows.follows.follow,
            followeds:state=>state.userInfo.followeds.follows.followeds
        })
    },
    mounted(){
        this.getFollows()
        this.getFolloweds()
        console.log('这是',this.followeds)
    }
}
</script>
<style lang="stylus" scoped>
.oneList{
    display flex
    padding 0.3rem 5%
    flex-direction column
}
.oneList li{
    display flex
    align-items center
    margin-bottom 0.5rem
}
.oneList img{
    width 1.5rem
    margin-right 0.3rem
    height 1.5rem
    border-radius 50%
}
.big{
    color red
}
.title{
    display flex
}
.title li{
    width 50%
    text-align center
}

</style>