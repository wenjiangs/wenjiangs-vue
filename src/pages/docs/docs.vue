<template>
  <div class="page">
    <div class="tabs">
      <div class="tabItem" :class="{active:tabIndex==index}"
           @click="tabClick(index)"
           v-for="(item, index) in initialsArr">{{item}}</div>
    </div>
    <div class="bottomTool" ref="bottomTool">
      <div class="btItem" :class="{active:$route.name=='index'}" @click="toRouter('/')"><i class="iconfont icon-shouye"></i> 首页</div>
      <div class="btItem" :class="{active:$route.name=='topic'}" @click="toRouter('topic')"><i class="iconfont icon-shequguanli"></i> 社区</div>
      <div class="btItem" :class="{active:$route.name=='message'}" @click="toRouter('message')"><i class="iconfont icon-xiaoxi"></i> 消息</div>
      <div class="btItem" :class="{active:$route.name=='docs'}" @click="toRouter('docs')"><i class="iconfont icon-File"></i> 专辑</div>
      <div class="btItem" :class="{active:$route.name=='ucenter'}" @click="toRouter('ucenter')"><i class="iconfont icon-wode"></i> 我的</div>
    </div>
    <div class="content">
      <div class="docsList">
        <div class="docsItem"
             @click="toRouter({path:'docsSingle', query:{ID:item.term_id}})"
             v-for="item in dataList">
          <div class="docsImage pull-left">
            <img :src="item.cover"/>
          </div>
          <div class="docsText">
            <h3>{{item.name}}</h3>
            <p v-if="!isEmpty(item.summary)">{{item.summary}}</p>
            <div>
              <span class="wjModel">浏览 {{item.views}}</span>
              <span class="wjModel">文档 {{item.count}}</span>
              <span class="wjModel">评论 {{item.comment_count}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import docs from './docs.js';
  export default docs;
</script>
