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
        <li v-for="item in contentList">
          <img :src="item.icon" alt="">
          <span>{{item.title}}</span>
        </li>
      </ul>
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
    export default {
        name: "My",
        data(){
            return{
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
                  title:"我的音乐"
                }
              ]
            }
        }
    }
</script>

<style scoped>
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
