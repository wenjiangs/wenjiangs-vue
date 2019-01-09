<template>
  <div class="page grayBg">
    <div class="topNav" ref="topNav">
      <div class="tnLeft pull-left" @click="toRouter(-1,1,0)"><i class="iconfont icon-left"></i></div>
      <h1>{{pageTitle}}</h1>
    </div>
    <div class="tabs topTabs">
      <div class="tabItem" :class="{active: tabIndex==1}" @click="clickTab(1)">我发表的评论</div>
      <div class="tabItem" :class="{active: tabIndex==2}" @click="clickTab(2)">别人给我的评论</div>
    </div>
    <div class="content">
      <div class="userCommentList">
        <div class="userCommentItem" v-for="item in dataList">
          <div class="singleHead">
            <div class="shAuthor">
              <div class="shDo pull-right">
                <button type="button" class="button button-info button-sm button-fill"><i class="iconfont icon-jia"></i> 关注</button>
              </div>
              <div class="shAvatar"><img :src="item.avatar" /></div>
              <div class="shText">
                <div>{{item.comment_author}}</div>
                <p>
                  <span class="wjModel">{{item.comment_date}}</span>
                  <span class="wjModel">{{item.views}} 浏览</span>
                </p>
              </div>
            </div>
          </div>
          <div class="wjContent" v-html="item.comment_content"></div>
          <div class="quotePost">
            <h3>{{item.post.title}}</h3>
            <div>
              <div class="wjModel">{{item.post.author_name}}</div>
              <div class="wjModel">{{item.post.date}}</div>
              <div class="wjModel">浏览 {{item.post.views}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import userComment from './userComment.js';
  export default userComment;
</script>
