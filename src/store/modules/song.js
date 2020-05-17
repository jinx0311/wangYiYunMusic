import Request from '../../request'
export default {
  state:{
    songListInfo:'',  //歌单信息，包含歌曲列表和歌单信息
    playingSongUrl:'',
    playingSongDetail:'',
    playingSongListInfo:'',  //播放列表
    songDetails:'' //歌曲详情
  },
  mutations:{
    updateSongDetails(state,payload){
      state.songDetails= payload
    },//歌曲详情
    updateSongList(state,payload){
      state.songListInfo = payload
    },
    updateSongUrl(state,payload){
      state.playingSongUrl = payload
    },
    updateSongInfo(state,payload){
      state.playingSongInfo = payload
    },
    updatePlayingSongListInfo(state,payload){
      state.playingSongListInfo = payload
    },
  },
  actions:{
    getSongName({state,commit},payload){
      return Request.ajax('getSongDetail',{
        ids:payload
      }).then(res => {
        if(res&& res.code == '200'){
          console.log(res)
          commit('updateSongDetails',res)
        }
        return res
      })
    },
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
    getSongUrl({state,commit},payload){
      return Request.ajax('getSongUrl',{
        id : payload.id
      }).then(res => {
        if(res && res.code == '200'){
          if(res.data[0].url){
            commit('updateSongUrl',res.data[0])
          }
        }
        return res
      })
    },
    getSongInfo({state,commit},payload){
      return Request.ajax('getSongDetail',{
        ids : payload.id
      }).then(res => {
        if(res && res.code == '200'){
          commit('updateSongInfo',res.songs[0])
        }
        return res
      })
    },
  }
}
