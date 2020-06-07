import Request from '../../request'
export default{
    state:{
        searchHot:[],
        search:[],
        hotWall:[],
        video:[]
    },
    mutations:{
        updateVideo(){
            state.video=payload
        },
        updateHotwall(state,payload){
            state.hotWall=payload
        },
        updateSearchHot(state,payload){
            state.searchHot=payload
        },
        updateSearch(state,payload){
            state.search=payload
        }
    },
    actions:{
        getVideo({state,commit},payload){ //获取云村热评
            return Request.ajax('video').then(
                res=>{
                    if(res&&res.code=='200'){
                        commit('updateVideo',res)
                    }
                    return res
                })
        },
        gethotWall({state,commit},payload){ //获取云村热评
            return Request.ajax('hotWall').then(
                res=>{
                    if(res&&res.code=='200'){
                        commit('updateHotwall',res)
                    }
                    return res
                })
        },
        getSearchHot({state,commit},payload){ //获取热门搜索列表
            return Request.ajax('searchHot').then(
                res=>{
                    if(res&&res.code=='200'){
                        commit('updateSearchHot',res)
                    }
                    return res
                })
        },
        getSearch({state,commit},payload){ //获取搜索列表
            return Request.ajax('search',{keywords:payload}).then(
                res=>{
                    if(res&&res.code=='200'){
                        commit('updateSearch',res)
                    }
                    return res
                })
        },
    }
}