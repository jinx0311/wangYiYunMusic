<template>
    <div class="my">
      <div style="height:2.4rem;overflow: hidden ">
        <ul class="topList">
          <li  v-for="item in topList">
            <div class="top_imgBg">
              <img :src="item.icon" alt="">
            </div>
            <span>{{item.title}}</span>
          </li>
        </ul>
      </div>
      <ul>
        <li class="myMusicList" v-for="item in contentList">
          <img :src="item.icon" alt="">
          <span>{{item.title}}</span>
        </li>
      </ul>
        <p @click="toRecentlyPlayed" class="playMore"><span>最近播放</span><span>更多<van-icon name="arrow" /></span></p>
        <div class="songList">
          <ul class="listName">
            <li @click='getcjlist' :class='listChange?"big":""'>创建歌单</li>
            <li @click='getsclist' :class='!listChange?"big":""'>收藏歌单</li>
          </ul>
          <ul class="songListSmall" v-show='listChange'>
            <li @click='tzsongList(item.id)' v-for='item in cjlist'>
               <img :src="item.coverImgUrl" alt="">
                <div class="songName">
                  <p class="songNameSmall">{{item.name}}</p>
                  <p class="songNameNum">{{item.trackCount}}首</p>
                </div>
            </li>
          </ul>
          <ul class="songListSmall" v-show='!listChange'>
            <li @click='tzsongList(item.id)' v-for='item in userSongList'>
             <img :src="item.coverImgUrl" alt="">
                <div class="songName">
                  <p class="songNameSmall">{{item.name}}</p>
                  <p class="songNameNum">{{item.trackCount}}首</p>
                </div>
            </li>
          </ul>
         
        </div>
    </div>
</template>

<script>
    import dianyin from '@/assets/电音.png'
    import friend from '@/assets/交友.png'
    import viedo from '@/assets/电台.png'
    import gudian from '@/assets/古典.png'
    import night from '@/assets/夜间.png'
    import chilrden from '@/assets/孩子.png'
    import hear from '@/assets/心.png'
    import sport from '@/assets/跑步.png'
    import cai from '@/assets/猜歌名.png'
    import music from '@/assets/音乐.png'
    import dowload from '@/assets/下载.png'
    import shou from '@/assets/收藏.png'
    import newSong from '@/assets/新品.png'
    import viedoTwo from '@/assets/电台2.png'
    //import axios from 'axios'
    import Request from '@/request'
    import {mapMutations,mapState,mapActions} from 'vuex'
    export default {
        name: "My",
        data(){
            return{
                listChange:true,
                cjlist:[],
                topList:[
                    {
                        icon:dianyin,
                        title:'最嗨电音'
                    },
                    {
                        icon:viedo,
                        title:'私人FM'
                    },
                    {
                        icon:night,
                        title:'sati空间'
                    },
                    {
                        icon:hear,
                        title:'私藏推荐'
                    },
                    {
                        icon:friend,
                        title:'因乐交友'
                    },
                    {
                        icon:chilrden,
                        title:'亲子频道'
                    },
                    {
                        icon:gudian,
                        title:'古典专区'
                    },

                    {
                        icon:'',
                        title:'小冰电台'
                    },
                    {
                        icon:'',
                        title:'爵士电台'
                    },
                    {
                        icon:'',
                        title:'驾驶模式'
                    },
                    {
                        icon:'',
                        title:'云村正能量'
                    },
                    {
                        icon:sport,
                        title:'节奏战争'
                    },
                    {
                        icon:cai,
                        title:'猜歌挑战'
                    }
                ],
              contentList:[
                {
                  icon:music,
                  title:"本地音乐"
                },
                {
                  icon:dowload,
                  title:"下载管理"
                },
                {
                  icon:viedoTwo,
                  title:"我的电台"
                },
                {
                  icon:shou,
                  title:"我的收藏"
                },
                {
                  icon:newSong,
                  title:"关注新歌"
                },
              ],
              test:[
                '请输入电话号码',
                '请输入电话号码'
              ]
            }
        },
      mounted() {
          console.log(this.userId,'这是my id')
          this.getUserestablishList(this.userId)
          console.log(this.userSongList,'这是数据')
          this.cjlist.push(this.userSongList[1])
            this.cjlist.push(this.userSongList[2])
            this.cjlist.push(this.userSongList[3])
            this.cjlist.push(this.userSongList[4])
      },
      methods:{
          ...mapActions(["getUserestablishList"]),
          toRecentlyPlayed(){
            this.$router.push({path:'/recentlyPlayed'})
          },
          getcjlist(){
            this.listChange=true
            
          },
          getsclist(){
            this.userSongList.splice(0,5)
            this.listChange=false
          },
          tzsongList(id){
            this.$router.push('/songList/'+id)
          }
      },
      computed:{
        ...mapState({
          userId:state=>state.userInfo.userId,
          userSongList:state=>state.song.UserestablishList.playlist
        })
      }
    }
</script>

<style scoped>
  .songNameNum{
    position: absolute;
    bottom: 0;
  }
  .songNameSmall{
    display:-webkit-box;  
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
  }
  .songName{
    display: flex;
    flex-direction: column;
    width: 55%;
    height: 100%;
    position: relative;
  }
  .songName p{
    margin: 0;
    font-size: 0.3rem;
  }
  .songListSmall{
    margin-top: 0.3rem;
    font-size: 0.4rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .songListSmall li{
    display: flex;
    flex-wrap: nowrap;
    width: 45%;
    height: 1.5rem;
    justify-content: space-between;
    margin-bottom: 0.3rem;
  }
  .songListSmall li img{
    width: 37%;
    height: 100%;
  }
  .big{
    font-weight: 800;
    color: #000;
  }
  .listName{
    padding-top: .3rem;
    border-top: 1px solid #eee;
    display: flex;
    color: #bbb;
    font-size: .38rem;
    flex-wrap: nowrap;
  }
  .listName li{margin-right: .5rem;}
  .songList{
    padding: 0 5%;
  }
  .playMore{
    display: flex;
    justify-content: space-between;
    padding: 0 5%;
    font-size: .38rem;
  }
  .myMusicList img{
    width: .7px;
    height: .7rem;
    margin-right: .3rem;
  }
  .myMusicList{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px 5%;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
  }
  .top_imgBg{
    height: 1.2rem;
    width: 1.2rem;
    margin: 0.2px auto;
    text-align: center;
    border-radius: 50%;
    background: #f8d176;
    margin-bottom: 0.2rem;
  }
  .top_imgBg img{
    height: 0.8rem;
    width: 0.8rem;
    margin:0.2rem;
  }
  .topList{
    width: 100%;
    display: flex;
    overflow-x: scroll;
    margin: 0.3rem 0;
    padding-bottom: 0.5rem;
    flex-wrap: nowrap;
  }
  .topList li{
    flex: 0 0 22%;
    width: 18%;
    margin: 0 0.133333rem;
    text-align: center;
  }
.van-tabbar-item{
  background: black;
}
</style>
