<template>
    <div>
        <div class="cont">
            <h1>{{songDetails.songs[0].al.name}}</h1>
            <p>{{songDetails.songs[0].ar[0].name}}</p>
            <img width="100%" :src="songDetails.songs[0].al.picUrl" alt="">
        </div>
        <div class="button">
            <van-button type="default" @click='topSong'>上一首</van-button>
            <van-button type="default" @click='downSong'>下一首</van-button>
        </div>
    </div>
</template>
<script>
import Request from '../../request'
import {mapState,mapActions,mapMutations} from 'vuex'
export default {
    name:"songDetails",
    computed:{
        ...mapState({
            songDetails:state => state.song.songDetails
        })
    },
    methods:{
        ...mapActions(['getSongName']),
        topSong(){

        },
        downSong(){

        }
    },
    mounted(){
        let songId=this.$route.params.songId
        this.getSongName(songId)
        // console.log('这是歌曲id',this.$route.params.songId)
    }
    
}
</script>
<style lang="stylus" scoped>
.cont{
    text-align center
}
.button{
    display flex
    justify-content center
}
</style>