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
import message from '@/page/message'
import search from '@/page/helloWorld/search'
import hotList from '@/page/helloWorld/hotList'
import resultList from '@/page/helloWorld/resultList'
import myFriend from '@/page/My/myFriend'
import {mapGetters} from 'vuex'
Vue.use(Router)


const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: layout,
      redirect:'/helloworld/find',
      children:[
      {
        path:'search',//最近播放
        name:search,
        component:search,
        redirect:'/search/hotList',
        children:[
          {
            path:'hotList',//热搜列表
            name:hotList,
            component:hotList,
          },
          {
            path:'resultList',//搜索结果
            name:'resultList',
            component:resultList,
          }
        ]
      },
      {
        path:'recentlyPlayed',//最近播放
        name:recentlyPlayed,
        component:recentlyPlayed,
      },
      {
        path:'message',//我的消息
        name:message,
        component:message,
      },
      {
        path:'myFriend',//我的朋友
        name:myFriend,
        component:myFriend,
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
// router.beforeEach(function (to, from, next) {
//   console.log(to.path)
//   console.log(router.app.$options.store.state.userInfo.userId)

//   if (router.app.$options.store.state.userInfo.userId==''&&to.path!='/login') {
//     router.push('/login')
//     console.log('.haha ')
//   } else {
//     next()
//   }
// })


export default router;
