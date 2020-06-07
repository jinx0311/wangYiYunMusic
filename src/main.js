// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
 import Vue from 'vue'
 import App from './App'
 import router from './router'
 import Vant from 'vant';
 import 'vant/lib/index.css';
 import axios from 'axios';
 import 'lib-flexible/flexible'
import Vuex from 'vuex'
import store from './store'
import animated from 'animate.css' // npm install animate.css --save安装，在引入
Vue.use(animated)

Vue.use(Vuex)

Vue.use(Vant);
Vue.prototype.$ajax = axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
