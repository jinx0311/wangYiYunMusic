/**
 * api接口统一管理
 */
import axios from 'axios'
import {
  bannerSwiper
} from './config'
//设置axios延迟时常
axios.defaults.timeout = 30000
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

export default {
  'login': {
    'name': '登录',
    'type': 'get',
    'path': '/login/cellphone'
  },

  'getUserInfo': {
    'name': '获取用户详细信息',
    'path': '/user/detail'
  },
  'banner': {
    'name': '获取首页轮播图',
    'path': '/banner?type=1'
  },
  'getUserSongList': {
    'name': '获取用户歌单列表',
    'path': '/user/subcount'
  },
  'getRecommendSongList':{
    name:'获取推荐歌单',
    path:'/personalized'
  },
  'getSongList': {
    'name':'获取歌单列表',
    'path':'/playlist/detail'
  },
  'getSongDetail': {
    'name':'获取歌曲信息',
    'path':'/song/url'
  }
}
