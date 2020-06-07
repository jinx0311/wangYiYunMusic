<template>
  <div>
    <div class="ty">
  <!-- 直接使用animated中的动画class名，注意：必须使用animated这个class名，否则动画会无效 -->
 <div class="box animated bounceInDown"></div>
</div>
    <div class="top">
      <header>
      <div @click="back()">
        <van-icon name="arrow-left" />
        <span>我的消息</span>
      </div>
      <p>标记已读</p>
    </header>

    <ul class="title">
      <li v-for="(item,key) in title" :key="key" @click="contChange(key)" :class="{big:key==titleNum}">{{item}}</li>
    </ul>
    <div class="line_big">
      <div  :class="['line','animated','bounceInDown','line'+titleNum]" :style="{left:lineLeft+'rem'}"></div>
    </div>
    </div>
    <div class="cont">
      <ul class="message" v-if="this.titleNum==0">
        <li class="messageLi animated bounce" v-for="item in Private.Private.msgs">
          <img :src="item.fromUser.avatarUrl" alt />
         
            <div style="width:6.5rem">
              <p>{{item.fromUser.nickname}}</p>
              <p class="message_cont">{{JSON.parse(item.lastMsg).msg}}:</p>
            </div>
            <div>
                <span class="newNum" v-if='item.newMsgCount!=0'>{{item.newMsgCount}}</span>
            </div>
        </li>
      </ul>
      <ul class="comment" v-if="this.titleNum==1">
          <li class="commentLi" v-for="item in comment.comment.comments">
          <img :src="item.user.avatarUrl" alt="">
          <div class="coment_cont">
              <p class="comment_nickName">{{item.user.nickname}}</p>
              <p>回复我：{{item.content}}</p>
              <p class="myTalk">
                  {{item.beRepliedContent}}
              </p>
          </div>
        </li>
      </ul>
      <ul class="comment" v-if="this.titleNum==2">
          <li class="commentLi" v-for='item in newJson'>
              <img :src="item.user.avatarUrl" alt="">
               <div class="coment_cont">
              <p class="comment_nickName">{{item.user.nickname}}</p>
              <p>分享评论：{{item.content}}</p>
              <p class="myTalk">
                  {{item.beRepliedContent}}
              </p>
          </div>
          </li>
      </ul>
      <ul class="notice" v-if="this.titleNum==3">
        <li class="noticeLi" :key="index" v-for='(item,index) in newNotice'>
            <img :src="item.user.avatarUrl" alt="">
            <div>
              <p><span style='color:#1989fa'>{{item.user.nickname}}</span>&nbsp;&nbsp;赞了你的评论</p>
              <p class="noticeCont">{{item.comment.content}}</p>
            </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "message",
  data() {
    return {
      nnn:'40px',
      lineLeft:'0.75',
      lineleft1:20,
      title: ["私信", "评论", "@我", "通知"],
      titleNum: 0,
      newJson:[], //新@我的数组
      newNotice:[] //新'通知'数组
    };
  },
  methods: {
    contChange(id) {
      this.titleNum = id;
      if(this.titleNum==0){
      this.lineLeft=0.75

    }else if(this.titleNum==1){
      this.lineLeft=3.35
    }
    else if(this.titleNum==2){
      this.lineLeft=5.90
    }else{
      this.lineLeft=8.45
    }
    },
    back() {
      this.$router.go(-1);
    },
    ...mapActions(["getPrivate","getComment","getMentionMe","getNotices"]),
    changeJson(){
        let that =this
        for(var i=0;i<that.mentionMe.comment.forwards.length;i++){
           that.newJson.push(JSON.parse(that.mentionMe.comment.forwards[i].json))
        }
        for(var j=0;j<that.notices.comment.notices.length;j++){
          that.newNotice.push(JSON.parse(that.notices.comment.notices[j].notice))
        }
    }
  },
  computed: {
    ...mapState({ 
        Private: state => state.userInfo.Private,
        comment: state => state.userInfo.comment,
        mentionMe: state=>state.userInfo.MentionMe,
        notices: state => state.userInfo.notices
        
    })
  },
  updated(){

    
    console.log(this.lineLeft)
    
  },
  mounted() {
   
    this.getPrivate();
    this.getComment();
    this.getMentionMe();
    this.getNotices();
    this.changeJson()
    console.log('这是新数组',this.newJson)
    console.log('这是通知',this.newNotice)
  }
};
// 0.75 3.35  5.90 8.45
</script>
<style lang="stylus">
.line_big{
  position relative
  padding 0 5%
}
.line{
  width 0.8rem
  height 0.06rem
  background red 
  position absolute 
  top -0.08rem
  transition  all 0.5s
}


.top{
  position absolute 
  top 0
  width 100%
  background #fff
  overflow hidden
}
.comment_nickName{
    color #1989fa
}
.coment_cont{
    width 100%
    margin-top 0.4rem
}
.coment_cont p{
    margin 0
    margin-bottom .3rem
}
.myTalk{
    background #eee
    padding: .2rem.5rem;
    margin-top -0.1rem !important
}
.newNum{
    display: inline-block;
    background: red;
    color: #fff;
    width: 0.5rem;
    height: 0.5rem;
    text-align: center;
    line-height: 0.5rem;
    border-radius: 50%;
    margin-top: 0.7rem;
    margin-left: 0.2rem;
}
.message_cont {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.messageLi{
  height: 2rem;
  align-items: center;
}
.noticeLi{
  margin-bottom .5rem
}
.noticeLi p{
  margin 0
}
.noticeCont{
  margin-top 0.2rem !important
}
.commentLi,.messageLi,.noticeLi{
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
}

.messageLi img,.commentLi img,.mentionLi img,.noticeLi img{
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  margin-right: 0.3rem;
}

.big {
  color: red;
}

.cont {
  width: 100%;
  margin-top: 2.2rem;
  padding: 0.3rem 5%;
  box-sizing: border-box;
}

.title {
  box-sizing: border-box;
  padding: 0.3rem 5%;
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  border-bottom: 1px solid #eee;
  padding-bottom: 0;
  justify-content: space-between;
}

.title li {
  display: inline-block;
  width: 15%;
  text-align: center;
  padding-bottom: 0.3rem;
}

header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 5%;
  box-sizing: border-box;
  height: 1.3rem;
  font-size: 0.4rem;
}

</style>