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
  'getSongUrl': {
    'name':'获取歌曲url',
    'path':'/song/url'
  },
  'checkSong':{
    'name':'判断歌曲是否可播放',
    'path':'/check/music'
  },
  'subcount':{
    'name':'判断歌曲是否可播放',
    'path':'/user/subcount'
  },
  'getSongDetail':{
    'name':'获取歌曲详情',
    'path':'/song/detail'
  },
  'getSongListList':{
    'name':'获取歌单列表',
    'path':'/top/playlist'
  },
  'getHighqualitySongListList':{
    'name':'获取精品歌单列表',
    'path':'/top/playlist/highquality'
  },
}
