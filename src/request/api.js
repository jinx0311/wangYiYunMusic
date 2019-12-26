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
  bannerSwiperFn () {
    return axios.get(bannerSwiper)
  }
}
