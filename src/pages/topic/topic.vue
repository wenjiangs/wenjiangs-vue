<template>
  <div class="page grayBg">
    <div class="topNav" ref="topNav">
      <h1>{{pageTitle}}</h1>
    </div>
    <div class="bottomTool" ref="bottomTool">
      <div class="btItem" :class="{active:$route.name=='index'}" @click="toRouter('/')"><i class="iconfont icon-shouye"></i> 首页</div>
      <div class="btItem" :class="{active:$route.name=='topic'}" @click="toRouter('topic')"><i class="iconfont icon-shequguanli"></i> 社区</div>
      <div class="btItem" :class="{active:$route.name=='message'}" @click="toRouter('message')"><i class="iconfont icon-xiaoxi"></i> 消息</div>
      <div class="btItem" :class="{active:$route.name=='docs'}" @click="toRouter('docs')"><i class="iconfont icon-File"></i> 专辑</div>
      <div class="btItem" :class="{active:$route.name=='ucenter'}" @click="toRouter('ucenter')"><i class="iconfont icon-wode"></i> 我的</div>
    </div>
    <div class="content" ref="content">
      <div class="topicList">
        <div class="topicItem" @click="toRouter({path:'single', query:{postType:'topic', ID:item.ID}})" v-for="item in dataList">
          <div class="shAuthor">
            <div class="shDo pull-right">
              <button type="button" class="button button-info button-sm button-fill"><i class="iconfont icon-jia"></i> 关注</button>
            </div>
            <div class="shAvatar"><img :src="item.author_avatar" /></div>
            <div class="shText">
              <div>{{item.author_name}}</div>
              <p>
                <span class="wjModel">{{item.date}}</span>
                <span class="wjModel">{{item.views}} 浏览</span>
              </p>
            </div>
          </div>
          <div class="wjContent">{{item.content}}</div>
          <div class="tiAloneImage" v-if="!isEmpty(item.thumbnails) && item.thumbnails.length==1">
            <img :src="item.thumbnails[0]" />
          </div>
          <div class="tiMulImage" v-if="!isEmpty(item.thumbnails) && item.thumbnails.length>1">
            <div class="timItem" v-for="item2 in item.thumbnails">
              <div><img :src="item2"/></div>
            </div>
          </div>
          <div class="tiFoot">
            <div class="singleToolsItem">
              <i class="iconfont icon-xiaoxi"></i> 评论 {{item.comment_count}}
            </div>
            <div class="singleToolsItem">
              <i class="iconfont icon-xin"></i> {{item.collection_current?'已收藏':'收藏'}} {{item.collection}}
            </div>
            <div class="singleToolsItem">
              <i class="iconfont icon-iconfontfenxiang"></i> 分享
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import topic from './topic.js';
  export default topic;
</script>
