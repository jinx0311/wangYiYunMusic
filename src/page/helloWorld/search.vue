<template>
    <div>
        <header>
            <van-icon name="arrow-left" @click='back()' />
            <input v-model="searchCont" class="search" type="text">
            <van-icon name="cross" class="delete" v-show='searchCont!=""' @click='deleteCont()' />
            <van-icon name="arrow" class="enter"  v-show='searchCont!=""' @click='sendCont()' />
            <van-icon name="friends-o" size="0.6rem" />
        </header>
        <router-view></router-view>
    </div>
</template>
<script>
import {mapMutations,mapState,mapActions} from 'vuex'
export default {
    name:'search',
    data() {
        return {
            searchCont:''
        }
    },
    methods:{
        ...mapActions(['getSearch']),
        deleteCont(){
            this.searchCont=''
        },
        
    sendCont(){
           this.getSearch(this.searchCont)
           let routing=this.$route.fullPath
           if(routing!='/search/resultList'){
            this.$router.push({
            name:"resultList",
            params:{
              id:this.searchCont
            }
          })
          this.getSearch(this.searchCont)
        }else{
              this.getSearch(this.searchCont)
        }
            
             
    },
    back(){
        this.$router.go(-1)
        this.searchCont=''
    }
    },
    
    computed:{
        ...mapState({
            searchList:state => state.find.search.result.songs
        })
    },
    
}
</script>
<style lang="stylus" scoped>
.enter{
    position absolute 
    right 1.5rem
}

.delete{
    position: relative;
    right: 1rem;
}

header{
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0.3rem 5%;
    box-sizing: border-box;
    height: 1.3rem;
    font-size: 0.5rem;
    justify-content space-between
}
.search{
    border none 
    border-bottom 1px solid #aaaaaa
    margin-left 0.3rem
    width 80%
    padding-bottom 0.1rem

}

</style>