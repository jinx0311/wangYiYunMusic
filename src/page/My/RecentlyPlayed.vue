<template>
    <div>
        <div class="head">
            <van-icon @click="back" name="arrow-left" />
            <p>最近播放</p>
            <p @click='empty()'>清空</p>
        </div>
           <ul class="songList">
               <li  @click='songDetails(item.song.id)' v-for='item in weekData' >
                   <p class="songName">{{item.song.al.name}}</p>
                   <p class="PeploName">{{item.song.ar[0].name}}-{{item.song.al.name}}</p>
               </li>
           </ul>
    </div>
</template>
<script>
import Request from '@/request'
import {mapMutations,mapState,mapActions} from 'vuex'
export default {
    name:'recentlyPlayed',
    data(){
        return{
            weekData:[]
        }
    },
    mounted(){
        this.getRecentlyPlayed()
    },
    methods:{
        songDetails(id){
            this.$router.push('/songDetails/'+id)
        },
        empty(){
               this.weekData=[] 
        },
        back(){
            this.$router.go(-1)
        },
        getRecentlyPlayed(){ //获取最近播放记录
            let that=this
            Request.ajax('getRecentlyPlayed',{
              uid:this.userId
            })
              .then(function (response) {
                console.log(response.weekData);
                that.weekData=response.weekData
              })
              .catch(function (error) {
                console.log(error);
                Toast('请确认登录信息')
              });
          }
    },
    computed:{
        ...mapState({
        userId:state => state.userInfo.loginInfo.account.id
      })
      }
}
</script>
<style lang="stylus" scoped>
.head{
    display flex
    justify-content space-between
    align-items center
    padding .1rem .5rem
    font-size .4rem
    position  fixed
    top 0
    width 100%
    box-sizing border-box
    height 1.3rem
    background #fff
    border-bottom 1px solid #ddd
}
.songList{
    padding .1rem .5rem
    margin-top 1.2rem
}
.songName{
    font-size .4rem
    margin-bottom 0
}
.PeploName{
    font-size: 0.2rem;
    color: #bbb;
    margin-bottom: .5rem;
    margin-top: .1rem;
}
</style>