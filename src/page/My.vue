<template>
    <div>
      <ul class="topList">
        <li v-for="item in topList">
          <img style="width: 1rem" :src="item.icon" alt="">
          <p>{{item.title}}</p>
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
                        icon:'',
                        title:'ACG专区'
                    },
                    {
                        icon:night,
                        title:'sati空间'
                    },
                    {
                        icon:'',
                        title:'私藏推荐'
                    },
                    {
                        icon:friend,
                        title:'因乐交友'
                    },
                    {
                        icon:'',
                        title:'亲自频道'
                    },
                    {
                        icon:gudian,
                        title:'古典专区'
                    },
                    {
                        icon:'',


                        
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
                        icon:'',
                        title:'节奏战争'
                    },
                    {
                        icon:'',
                        title:'猜歌挑战'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
  .topList li{
    background: #ddd;
  }
.van-tabbar-item{
  background: black;
}
</style>
