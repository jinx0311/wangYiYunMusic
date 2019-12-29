import axios from 'axios'
import api from './api'
import config from './config'

const host = 'https://www.xuweijin.com/wyyApi'

const request = {
  ajax:(serverName,data) => {
    const serverData = api[serverName]
    const url = host+serverData.path
    if(!serverData.type || serverData.type=='get'){
      return axios.get(url,{
        params:data
      },{
        withCredentials: true
      }).then(res => {
         return res
      }).catch(error => {
        return error
      })
    }else{
      return axios.post(url,data,{
        withCredentials: true
      }).then(res => {
        return res
      }).catch(error => {
        return error
      })
    }
  }
}

export default {
  ajax:request.ajax
}
