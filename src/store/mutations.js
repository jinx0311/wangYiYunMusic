export default {
   Logo (state) {
    state.loginState=true
  },
  getUserId(state,id){
     state.accountUid=id
  },
  saveUserInfo(state,param){
     state.level=param.level
     state.nikeName=param.profile.nickname
     state.avatar=param.profile.avatarUrl
  }
}

