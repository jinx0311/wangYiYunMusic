<template>
        <div class="hot">
            <h4>热搜榜</h4>
            <ul>
                <li @click='tosearch(item.searchWord)' class="hotList" v-for='(item,key) in hotList'>
                    <p class="num">{{key+1}}</p>
                    <div>
                        <p class="songName">{{item.searchWord}}</p>
                        <p class="songCont">{{item.content}}</p>
                    </div>
                </li>
            </ul>
        </div>
</template>
<script>
import {mapMutations,mapState,mapActions} from 'vuex'
export default {
    name:'hotList',
    data(){
        return{
            
        }
    },
    computed:{
        ...mapState({
            hotList:state => state.find.searchHot.data
        })
        
    },
    methods:{
        ...mapActions(['getSearchHot','getSearch']),
        tosearch(cont){
            this.$router.push('resultList')
            this.getSearch(cont)
        }
    },
    mounted(){
        this.getSearchHot()
    }
}
</script>
<style lang="stylus" scoped>
.hot{
    padding 0 5%
}
.hot p{
    margin 0
}
.hot li{
    margin-bottom 0.3rem
}

.num{
    color red
    margin-right 0.5rem !important
    width 0.5rem
}
.hotList{
    display flex
    align-items center
}
.songName{
    font-weight 600
    margin-bottom 0.1rem !important
}
.songCont{
    color #aaa

}
</style>