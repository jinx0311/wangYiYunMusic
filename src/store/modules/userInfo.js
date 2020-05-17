import Request from '../../request'
export default {
  state:{
    loginInfo:'',
    userInfo:'',
    userId:'',
    testCount:0,
  },
  mutations:{
    updateLoginInfo(state,payload){
      state.loginInfo = payload.loginInfo
    },
    updateUserInfo(state,payload){
      state.userInfo = payload.userInfo
    },
    updateTestCount(state,payload){
      state.testCount = state.testCount+payload.num
    },
  },
  actions:{
    userLogin({state,commit},payload){
      return Request.ajax('login',{
        phone:payload.phone,
        password:payload.password
      }).then(res => {
        if(res && res.code == '200'){
          commit('updateLoginInfo',{
            loginInfo:res
          })
        }
        return res
      })
    },
    getUserInfo({state,commit},payload){
      console.log(payload)
      return Request.ajax('getUserInfo',{
        uid:payload.id,
      }).then(res => {
        if(res && res.code == '200'){
          commit('updateUserInfo',{
            userInfo:res
          })
        }
        return res
      })
    }
  }
}
