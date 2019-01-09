<template>
  <div class="page grayBg">
    <div class="bottomTool" ref="bottomTool">
      <div class="btItem" :class="{active:$route.name=='index'}" @click="toRouter('/')"><i class="iconfont icon-shouye"></i> 首页</div>
      <div class="btItem" :class="{active:$route.name=='topic'}" @click="toRouter('topic')"><i class="iconfont icon-shequguanli"></i> 社区</div>
      <div class="btItem" :class="{active:$route.name=='message'}" @click="toRouter('message')"><i class="iconfont icon-xiaoxi"></i> 消息</div>
      <div class="btItem" :class="{active:$route.name=='docs'}" @click="toRouter('docs')"><i class="iconfont icon-File"></i> 专辑</div>
      <div class="btItem" :class="{active:$route.name=='ucenter'}" @click="toRouter('ucenter')"><i class="iconfont icon-wode"></i> 我的</div>
    </div>
    <div class="content">
      <div class="ucHead" :class="{hasRight: isLogin}">
        <div class="uchAvatar pull-left"><img src="http://www.wenjiangs.com/wp-content/themes/wtheme/images/logo_avatar.jpg"/></div>
        <div class="uchText">
          <h3>{{isLogin?userInfo.display_name:'请登录'}}</h3>
          <p>{{isLogin?'查看或编辑个人资料':'点击这里去登录'}}</p>
        </div>
      </div>
      <div class="listBlock" v-if="isLogin">
        <div class="listItem hasRight" @click="toRouter('userPost')">
          <div class="listTitle"><i class="iconfont icon-wenzhangguanli"></i> 我的文章</div>
          <div class="listContent">{{userInfo.post_count}}</div>
        </div>
        <div class="listItem hasRight" @click="toRouter('userComment')">
          <div class="listTitle"><i class="iconfont icon-xiaoxi"></i> 我的评论</div>
          <div class="listContent">{{userInfo.comment_count}}</div>
        </div>
        <div class="listItem hasRight" @click="toRouter('userTopic')">
          <div class="listTitle"><i class="iconfont icon-application"></i> 我的话题</div>
          <div class="listContent">{{userInfo.topic_count}}</div>
        </div>
        <div class="listItem hasRight" @click="toRouter('userReply')">
          <div class="listTitle"><i class="iconfont icon-liaotian2"></i> 我的回复</div>
          <div class="listContent">{{userInfo.reply_count}}</div>
        </div>
        <div class="listItem hasRight" @click="toRouter('userCollection')">
          <div class="listTitle"><i class="iconfont icon-xin"></i> 我的收藏</div>
          <div class="listContent">{{userInfo.collection_count}}</div>
        </div>
      </div>
      <div class="listBlock">
        <div class="listItem hasRight" @click="toRouter('setting')" v-show="isLogin">
          <div class="listTitle"><i class="iconfont icon-shezhi2"></i> 账户设置</div>
          <div class="listContent"></div>
        </div>
        <div class="listItem hasRight" @click="toRouter('feedback')">
          <div class="listTitle"><i class="iconfont icon-fankuiyijianfankui-xianxing"></i> 意见反馈</div>
          <div class="listContent"></div>
        </div>
        <div class="listItem hasRight" @click="toRouter('page')">
          <div class="listTitle"><i class="iconfont icon-File"></i> 关于我们</div>
          <div class="listContent"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ucenter from './ucenter.js';
  export default ucenter;
</script>
