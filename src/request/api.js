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

export default{
  'login':{
    'name':'登录',
    'type':'get',
    'path':'/login'
  },
  'getUserInfo':{
    'name':'获取用户信息',
    'path':'/user/subcount'
  },
  'banner':{
    'name':'获取首页轮播图',
    'path':'/banner?type=1'
  }
}
