<template>
    <div>
        <ul class="resuliList">
            <li v-for='item in searchList'>
               <p class="songName">{{item.name}}</p>
               <p class="userName">{{item.artists[0].name}}-{{item.name}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
    data(){
        return{

        }
    },
    computed:{
        ...mapState({
            searchList: state => state.find.search.result.songs
        })
    },
    methods:{
        ...mapActions(['getSearch'])
    },
    // updated(){
    //     this.getSearch(this.$route.params.id)
    // },
    // mounted(){
    //     this.getSearch(this.$route.params.id)
    // },
   
}
</script>
<style lang="stylus" scoped>
.resuliList{
    padding 0.3rem 5%
}
.songName{
    color #000
    font-size 0.4rem
    margin-bottom 0.1rem
}
.userName{
    color #bbb
    font-size 0.3rem
    margin-top 0
}
</style>