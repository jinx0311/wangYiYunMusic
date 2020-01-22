<template>
  <div class="songListBackground-wrap">
    <ul class="tag-ul"><li @click="changeTag(item)" :class="['tag-li',currentTag == item.value?'active':'']" v-for="(item,index) in tagList" :key="index">{{item.name}}</li></ul>
    <div class="songUl-wrap">
      <songListUl :songList = "songListList"></songListUl>
    </div>
  </div>
</template>

<script>
  import Request from '../request'
  import songListUl from '../components/songListUl'
  export default {
    name: "songListBackground",
    components:{
      songListUl
    },
    mounted(){
      this.getSongList()
    },
    data(){
      return{
        currentTag:'推荐',
        songListList:'',
        tagList:[{name:'推荐',value:'推荐'},{name:'精品',value:'精品'},{name:'华语',value:'华语'},{name:'流行',value:'流行'},{name:'民谣',value:'民谣'},{name:'轻音乐',value:'轻音乐'},{name:'摇滚',value:'摇滚'}]
      }
    },
    methods:{
      changeTag(params){
        this.currentTag = params.value
        this.songListList = ''
        this.getSongList()
      },
      getSongList(){
        if(this.currentTag == '推荐'){
          Request.ajax('getSongListList').then( res => {
            this.songListList = res.playlists
          })
        }else if(this.currentTag == '精品'){
          Request.ajax('getHighqualitySongListList').then( res => {
            this.songListList = res.playlists
          })
        }else{
          Request.ajax('getSongListList',{
            cat:this.currentTag
          }).then( res => {
            this.songListList = res.playlists
          })
        }
      }
    }
  }
</script>

<style lang="stylus">
.songListBackground-wrap{
  .tag-ul{
    height 80px
    overflow hidden
    .tag-li{
      float: left
      padding 0 20px
      &.active{
        color #ff3366
      }
    }
  }
  .songUl-wrap{
    padding 0 20px
  }
}
</style>
