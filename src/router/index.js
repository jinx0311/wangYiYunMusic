import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import layout from '@/components/layout'
import find from '@/components/BigPage/Find'
import My from '@/components/BigPage/My'
import YunCun from '@/components/BigPage/YunCun'
import MyVideo from '@/components/BigPage/MyVideo'
import login from '@/page/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: layout,
      redirect:'/helloworld/find',
      children:[
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
              path:'video',
              name:MyVideo,
              component:MyVideo
            },
            {
              path:'yuncun',
              name:YunCun,
              component:YunCun
            }
          ]
        },{
          path:'login',
          name:login,
          component:login
        }
      ]
    }
  ]
})
