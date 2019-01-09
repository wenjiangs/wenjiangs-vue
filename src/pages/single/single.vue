<template>
  <div class="page grayBg">
    <div class="topNav" ref="topNav">
      <div class="tnLeft pull-left" @click="toRouter(-1,1,0)"><i class="iconfont icon-left"></i></div>
      <h1>{{pageTitle}}</h1>
    </div>
    <div class="bottomTool" ref="bottomTool">
      <div class="btItem" @click="showCommentBox">
        <i class="iconfont icon-xiaoxi"></i> 评论 {{post.comment_count}}
      </div>
      <div class="btItem" @click="collection" v-show="post.collection_current">
        <i class="iconfont icon-xin"></i> 已收藏 {{post.collection}}
      </div>
      <div class="btItem" @click="collection" v-show="!post.collection_current">
        <i class="iconfont icon-xin"></i> 收藏 {{post.collection}}
      </div>
        <div class="btItem">
          <i class="iconfont icon-iconfontfenxiang"></i> 分享
        </div>
        <template v-if="!isEmpty(userInfo) && userInfo.ID == post.post_author">
        <div class="btItem" @click="toRouter({path:'postEdit', query:{postID:postID}})">
          <i class="iconfont icon-bianji"></i> 编辑
        </div>
        <div class="btItem" @click="toTrash">
          <i class="iconfont icon-jiufuqianbaoicon05"></i> 删除
        </div>
      </template>
    </div>
    <div class="content" ref="content">
      <div class="singleHead">
        <h2>{{post.title}}</h2>
        <div class="shAuthor">
          <div class="shDo pull-right">
            <button type="button" class="button button-info button-sm button-fill"><i class="iconfont icon-jia"></i> 关注</button>
          </div>
          <div class="shAvatar"><img :src="post.author_avatar" /></div>
          <div class="shText">
            <div>{{post.author_name}}</div>
            <p>
              <span class="wjModel">{{post.date}}</span>
              <span class="wjModel">{{post.views}} 浏览</span>
            </p>
          </div>
        </div>
      </div>
      <div class="wjContent" v-html="post.content"></div>
      <div class="mod">
        <div class="modTitle">
          <h3 class="pull-left">相关文章</h3>
          <span class="pull-right">更多推荐 <i class="iconfont icon-right"></i></span>
        </div>
        <div class="modCon">
          <div class="relevantPost">
            <div class="rpItem" @click="toRouter({path:'single', query:{postType:item.post_type, ID:item.ID}})" v-for="item in relevantPosts">
              <div class="rpImage pull-right" v-if="!isEmpty(item.thumbnails)">
                <img :src="item.thumbnails[0]"/>
              </div>
              <div class="rpTitle">{{item.title}}</div>
              <div class="rpMeta">
                <div class="wjModel">{{item.views}} 阅读</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mod">
        <div class="modTitle">
          <h3 class="pull-left">评论 <span class="badge">只看作者</span></h3>
          <span class="pull-right">按时间排序 <i class="iconfont icon-xiangxia"></i></span>
        </div>
        <div class="modCon">
          <div class="commentList">
            <div class="clItem" v-for="(item, index) in comments">
              <div class="clAvatar pull-left">
                <img :src="item.avatar"/>
              </div>
              <div class="clText">
                <div class="clMeta">
                  <span class="wjModel pull-right">{{post.comment_count - index}} 楼</span>
                  <span class="wjModel">{{item.comment_author}}</span>
                  <span class="wjModel">{{item.comment_date}}</span>
                </div>
                <div class="clContent wjContent" v-html="item.comment_content"></div>
                <div class="clMeta">
                  <span class="wjModel"><i class="iconfont icon-zan"></i> 0</span>
                  <span class="wjModel"><span class="commentReplyBedge">回复</span></span>
                </div>
              </div>
            </div>
            <div class="empty" v-if="comments.length==0">
              <div class="empty2">
                <div class="emptyIcon"></div>
                <div class="emptyText">暂无数据！</div>
              </div>
            </div>
          </div>
        </div>
        <div class="noMore" v-show="noMore && comments.length>0">~没有更多了~</div>
      </div>
    </div>
    <div class="wjMask" :class="{active: isShowCoomentBox}" @click="isShowCoomentBox=false"></div>
    <div class="commentBox" :class="{active: isShowCoomentBox}">
      <textarea class="formControl" v-model="commentContent" placeholder="请输入评论内容"></textarea>
      <div class="cbBtn">
        <div class="sendEmoji pull-left"><i class="iconfont icon-smile"></i></div>
        <div class="cbBtn2"><button @click="sendComment" class="button button-fill">发布</button></div>
      </div>
    </div>
  </div>
</template>

<script>
  import single from './single.js';
  export default single;
</script>
