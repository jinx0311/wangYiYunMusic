/*
 * @Author: 李浩栋
 * @Begin: 2019-07-30 16:42:30
 * @Update: 2019-09-12 14:23:38
 * @Update log: 更新日志
 */
import Vue from 'vue'
import Vuex from 'vuex'
import userInfo from './modules/userInfo'
import song from './modules/song'
import getUserSongList from "./modules/getUserSongList";
// import getters from './getters'
// import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules:{
    userInfo,
    song,
    getUserSongList
  }
})


export default store
