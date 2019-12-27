import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Find from '@/components/BigPage/Find'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect:'/find',
      children:[
        {
          path:'find',
          name:Find,
          component:Find
        }
      ]
    }
  ]
})
