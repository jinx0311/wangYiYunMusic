<template>
  <div>
    <header>
      <div @click="back()">
        <van-icon name="arrow-left" />
        <span>我的消息</span>
      </div>
      <p>标记已读</p>
    </header>

    <ul class="title">
      <li v-for="(item,key) in title" @click="contChange(key)" :class="{big:key==titleNum}">{{item}}</li>
    </ul>
    <div class="cont">
      <ul class="message" v-if="this.titleNum==0">
        <li class="messageLi" v-for="item in Private.Private.msgs">
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
      <ul class="notice" v-if="this.titleNum==3">通知</ul>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "message",
  data() {
    return {
      title: ["私信", "评论", "@我", "通知"],
      titleNum: 2,
      newJson:[]
    };
  },
  methods: {
    contChange(id) {
      this.titleNum = id;
    },
    back() {
      this.$router.go(-1);
    },
    ...mapActions(["getPrivate","getComment","getMentionMe"]),
    changeJson(){
        
        let that =this
        for(var i=0;i<that.mentionMe.comment.forwards.length;i++){
           that.newJson.push(JSON.parse(that.mentionMe.comment.forwards[i].json))

        }
    }
  },
  computed: {
    ...mapState({ 
        Private: state => state.userInfo.Private,
        comment: state => state.userInfo.comment,
        mentionMe: state=>state.userInfo.MentionMe
        
    })
  },
  mounted() {
    this.getPrivate();
    this.getComment();
    this.getMentionMe();
    console.log(this.mentionMe,'aha')
    this.changeJson()
    console.log('这是新数组',this.newJson)
  }
};
</script>
<style lang="stylus" scoped>
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
..messageli{height: 2rem;
  align-items: center;}
.commentLi,.messageli{
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
}

.messageLi img,.commentLi img,.mentionLi img{
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  margin-right: 0.3rem;
}

.big {
  color: red;
  border-bottom: 4px solid red;
}

.cont {
  width: 100%;
  margin-top: 0;
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