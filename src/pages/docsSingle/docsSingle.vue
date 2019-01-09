<template>
  <div class="page grayBg">
    <div class="topNav" ref="topNav">
      <div class="tnLeft pull-left" @click="toRouter(-1,1,0)"><i class="iconfont icon-left"></i></div>
      <h1>{{pageTitle}}</h1>
    </div>
    <div class="bottomTool" ref="bottomTool">
      <div class="btItem">
        <i class="iconfont icon-xiaoxi"></i> 评论 {{term.comment_count}}
      </div>
      <div class="btItem" v-show="term.collection_current">
        <i class="iconfont icon-xin"></i> 已收藏 {{term.collection}}
      </div>
      <div class="btItem" v-show="!term.collection_current">
        <i class="iconfont icon-xin"></i> 收藏 {{term.collection}}
      </div>
      <div class="btItem">
        <i class="iconfont icon-iconfontfenxiang"></i> 分享
      </div>
    </div>
    <div class="content">
      <div class="docsItem">
        <div class="docsImage pull-left">
          <img :src="term.cover"/>
        </div>
        <div class="docsText">
          <h3>{{term.name}}</h3>
          <p v-if="!isEmpty(term.summary)">{{term.summary}}</p>
          <div>
            <span class="wjModel">浏览 {{term.views}}</span>
            <span class="wjModel">文档 {{term.count}}</span>
            <span class="wjModel">评论 {{term.comment_count}}</span>
          </div>
        </div>
      </div>
      <div class="tabs docsTabs">
        <div class="tabItem" :class="{active: tabIndex==0}" @click="clickTabs(0)">简介</div>
        <div class="tabItem" :class="{active: tabIndex==1}" @click="clickTabs(1)">目录</div>
        <div class="tabItem" :class="{active: tabIndex==2}" @click="clickTabs(2)">评论</div>
      </div>
      <div class="wjContent" v-if="tabIndex==0" v-html="term.details"></div>
      <div class="docsMenu" v-if="tabIndex==1">
        <div class="listBlock">
          <div class="listItem" @click="toRouter({path:'single', query:{postType:'doc',ID:item.ID}})" v-for="item in docsMenu">{{item.title}}</div>
        </div>
      </div>
      <div class="docsComment" v-if="tabIndex==2">
        <div class="commentList">
          <div class="clItem" v-for="(item, index) in docsComment">
            <div class="clAvatar pull-left">
              <img :src="item.avatar"/>
            </div>
            <div class="clText">
              <div class="clMeta">
                <span class="wjModel pull-right">{{term.comment_count - index}} 楼</span>
                <span class="wjModel">{{item.comment_author}}</span>
                <span class="wjModel">{{item.comment_date}}</span>
              </div>
              <div class="clContent wjContent" v-html="item.content"></div>
              <div class="clMeta">
                <span class="wjModel">顶 0</span>
                <span class="wjModel">踩 0</span>
                <span class="wjModel">回复</span>
              </div>
            </div>
          </div>
          <div class="empty" v-if="docsComment.length==0">
            <div class="empty2">
              <div class="emptyIcon"></div>
              <div class="emptyText">暂无数据！</div>
            </div>
          </div>
        </div>
        <div class="noMore" v-show="commentNoMore && docsComment.length>0">
          ~没有更多了~</div>
      </div>
    </div>
  </div>
</template>

<script>
  import docsSingle from './docsSingle.js';
  export default docsSingle;
</script>
