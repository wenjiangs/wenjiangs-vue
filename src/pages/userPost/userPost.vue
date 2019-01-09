<template>
  <div class="page">
    <div class="topNav" ref="topNav">
      <div class="tnLeft pull-left" @click="toRouter(-1,1,0)"><i class="iconfont icon-left"></i></div>
      <h1>{{pageTitle}}</h1>
    </div>
    <div class="tabs topTabs">
      <div class="tabItem" v-for="(item, index) in postStatus" :class="{active: tabIndex==index}" @click="clickTab(index)">{{item.text}}</div>
    </div>
    <div class="content">
      <div class="userPostList">
        <div class="userPostItem" @click="toRouter({path:'single', query:{postType: item.post_type, ID:item.ID}})" v-for="item in dataList">
          <h3>{{item.title}}</h3>
          <div class="userPostMeta">
            <div class="wjModel">{{item.date}}</div>
            <div class="wjModel">浏览 {{item.views}}</div>
            <div class="wjModel">评论 {{item.comment_count}}</div>
            <div class="wjModel">收藏 {{item.collection}}</div>
          </div>
        </div>
      </div>
      <div class="empty empty-fill" v-if="dataList.length==0">
        <div class="empty2">
          <div class="emptyIcon"></div>
          <div class="emptyText">暂无数据！</div>
        </div>
      </div>
      <div class="inlineLoading" v-show="!noMore"><i class="loadIcon"></i> 加载中</div>
      <div class="noMore" v-show="noMore && dataList.length>0">~没有更多了~</div>
    </div>
  </div>
</template>

<script>
  import userPost from './userPost.js';
  export default userPost;
</script>
