import Request from '../../request'
export default {
  state:{
    userInfo:'',
    testCount:0,
  },
  mutations:{
    updateUserInfo(state,payload){
      state.userInfo = payload.userInfo
    },
    updateTestCount(state,payload){
      console.log(state.testCount)
      state.testCount = ++state.testCount
    },
  },
  actions:{
    userLogin({state,commit},payload){
      return Request.ajax('login',{
        phone:payload.phone,
        password:payload.password
      }).then(res => {
        if(res && res.code == '200'){
          commit('updateUserInfo',{
            loginInfo:res
          })
        }
        return res
      })
    }
  }
}
