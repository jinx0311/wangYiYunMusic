import Request from '../../request'
export default {
  state:{
    loginInfo:'',
    userInfo:'',
    userId:'',
    testCount:0,
    Private:[],//用户私信
    comment:[],//用户收到的评论
    MentionMe:[], //@我的消息
    notices:[],
    follows:[], //获取用户关注列表
    followeds:[],//获取用户粉丝列表
  },
  mutations:{
    updateFolloweds(state,payload){
      state.followeds=payload
    },
    updateFollows(state,payload){
      state.follows=payload
    },
    updateNotices(state,payload){ //获取我的通知
      state.notices=payload
    },
    updateMentionMe(state,payload){ //更新@我的消息
      state.MentionMe=payload
    },
    updateComment(state,payload){  //更新用户收到的评论
      state.comment=payload
    },
    undatePrivate(state,payload){ //更新用户私信
      state.Private = payload
    },
    updateUserId(state,payload){
      state.userId = payload.userId
    },
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
    getFolloweds({state,commit},payload){ //获取我的粉丝
      return Request.ajax('followeds',{
        uid:state.userId
      }).then(res=>{
        if(res&&res.code=='200'){
          console.log(res)
          commit('updateFolloweds',{
            follows:res
          })
        }
      })
    },
    getFollows({state,commit},payload){ //获取我的关注
      return Request.ajax('follows',{
        uid:state.userId
      }).then(res=>{
        if(res&&res.code=='200'){
          console.log(res)
          commit('updateFollows',{
            follows:res
          })
        }
      })
    },
    getNotices({state,commit},payload){ //获取我的通知
      return Request.ajax('getNotices',{
        limit:40
      }).then(res => {
        if(res&&res.code=='200'){
          console.log(res)
          commit('updateNotices',{
            comment:res
          })
        }
      })
    },
    getMentionMe({state,commit},payload){ //获取@我的消息
      return Request.ajax('getMentionMe',{
        limit:20
      }).then(res => {
        if(res&&res.code=='200'){
          console.log(res)
          commit('updateMentionMe',{
            comment:res
          })
        }
      })
    },
    getComment({state,commit},payload){ //获取用户收到的评论
      return Request.ajax('getcomment',{
        limit:20,uid:state.userId
      }).then(res => {
        if(res&&res.code=='200'){
          console.log(res)
          commit('updateComment',{
            comment:res
          })
        }
      })
    },
    getPrivate({state,commit},payload){ //获取用户私信
      return Request.ajax('getPrivate',{
        limit:20,
        offset:1
      }).then(res => {
        if(res&&res.code=='200'){
          console.log(res)
          commit('undatePrivate',{
            Private:res
          })
        }
      })
    },
    userLogin({state,commit},payload){
      return Request.ajax('login',{
        phone:payload.phone,
        password:payload.password
      }).then(res => {
        if(res && res.code == '200'){
          commit('updateUserId',{
            userId:res.account.id
          })
          commit('updateLoginInfo',{
            loginInfo:res
          })
        }
        return res
      })
    },
    getUserInfo({state,commit},payload){
   //   console.log(payload)
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
