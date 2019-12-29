import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import layout from '@/components/layout'
import Find from '@/components/BigPage/Find'
import login from '@/page/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: layout,
      redirect:'/find',
      children:[
        {
          path:'find',
          name:HelloWorld,
          component:HelloWorld
        },{
          path:'login',
          name:login,
          component:login
        }
      ]
    }
  ]
})
