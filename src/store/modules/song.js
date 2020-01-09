import Request from '../../request'
export default {
  state:{
    songListInfo:'',  //歌单信息，包含歌曲列表和歌单信息
    playingSongInfo:'',
  },
  mutations:{
    updateSongList(state,payload){
      state.songListInfo = payload
    },
    updateSongInfo(state,payload){
      state.playingSongInfo = payload
    }
  },
  actions:{
    getSongList({state,commit},payload){
      return Request.ajax('getSongList',{
        id : payload.id
      }).then(res => {
        if(res && res.code == '200'){
          commit('updateSongList',res.playlist)
        }
        return res
      })
    },
    getSongInfo({state,commit},payload){
      return Request.ajax('getSongDetail',{
        id : payload.id
      }).then(res => {
        if(res && res.code == '200'){
          commit('updateSongInfo',res.data[0])
        }
        return res
      })
    },
  }
}
