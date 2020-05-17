import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/page/HelloWorld'
import layout from '@/components/layout'
import find from '@/page/Find'
import My from '@/page/My'
import YunCun from '@/page/YunCun'
import songListBackground from '@/page/songListBackground'
import MyVideo from '@/page/MyVideo'
import songList from '@/page/songList'
import songDetails from '@/page/My/songDetails'
import login from '@/page/login'
import recentlyPlayed from '@/page/My/RecentlyPlayed'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: layout,
      redirect:'/helloworld/find',
      children:[ {
        path:'recentlyPlayed',//最近播放
        name:recentlyPlayed,
        component:recentlyPlayed,
      },
        {
          path:'helloworld',
          name:HelloWorld,
          component:HelloWorld,
          children:[
            {
              path:'find',
              name:find,
              component:find
            },
            {
              path:'my',
              name:My,
              component:My
            },
           
            {
              path:'myvideo',
              name:MyVideo,
              component:MyVideo
            },
            {
              path:'yuncun',
              name:YunCun,
              component:YunCun
            },{
              path:'songListBackground',
              name:songListBackground,
              component:songListBackground
            }
          ]
        },{
          path:'songList/:songListId',
          name:'songList',
          component:songList
        },
        {
          path:'songDetails/:songId',
          name:'songDetails',
          component:songDetails
        },
        {
          path:'login',
          name:login,
          component:login
        }
      ]
    }
  ]
})
