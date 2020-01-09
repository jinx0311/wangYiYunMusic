import Request from '../../request'
export default {
  state:{
    userSongList:''
  },
  mutations:{
    upUserSongList(state,payload){
      state.userSongList = payLoad
    }
  },
  actions:{
    getUserSongList({state,commit},payload){
      return Request.ajax('getUserSongList').then(res => {
        // if(res && res.code == '200'){
        //   commit('updateSongList',res.playlist)
        // }
        console.log("222")
        console.log(res)
        return res
      })
    }
  }
}
