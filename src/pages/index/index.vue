<template>
  <div class="page grayBg">
    <div class="bottomTool" ref="bottomTool">
      <div class="btItem" :class="{active:$route.name=='index'}" @click="toRouter('/')"><i class="iconfont icon-shouye"></i> 首页</div>
      <div class="btItem" :class="{active:$route.name=='topic'}" @click="toRouter('topic')"><i class="iconfont icon-shequguanli"></i> 社区</div>
      <div class="btItem" :class="{active:$route.name=='message'}" @click="toRouter('message')"><i class="iconfont icon-xiaoxi"></i> 消息</div>
      <div class="btItem" :class="{active:$route.name=='docs'}" @click="toRouter('docs')"><i class="iconfont icon-File"></i> 专辑</div>
      <div class="btItem" :class="{active:$route.name=='ucenter'}" @click="toRouter('ucenter')"><i class="iconfont icon-wode"></i> 我的</div>
    </div>
    <div class="content" ref="content">
      <div class="banner">
        <swiper :options="swiperOption" ref="mySwiper" class="mySwiper">
          <swiper-slide v-for="(item, index) in banner" :key="index">
            <img :src="WEBURL + item.image">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="homeNav">
        <swiper :options="categorySwiperOption" ref="myCatSwiper" class="myCatSwiper">
          <swiper-slide
            v-for="(item, index) in category" :key="index"
            :class="{'active': catIndexID==item.term_id}">
            <span @click="tabClick(item.term_id)">{{item.name}}</span>
          </swiper-slide>
        </swiper>
      </div>
      <div class="postList">
        <div class="postItem" @click="toRouter({path:'single', query:{postType:'post', ID: item.ID}})" v-for="item in dataList">
          <div class="pAloneImage" v-if="item.thumbnails && item.thumbnails.length<3">
            <img :src="item.thumbnails[0]"/>
          </div>
          <div class="pTop">
            <span class="wjModel"><img :src="item.author_avatar"/> {{item.author_name}}</span>
            <span class="wjModel">{{item.date}}</span>
          </div>
          <div class="pTitle">{{item.title}}</div>
          <div class="pMulImage" v-if="item.thumbnails && item.thumbnails.length>2">
            <div class="pmiItem" v-for="item2 in item.thumbnails">
              <div class="pmiWrap">
                <img :src="item2"/>
              </div>
            </div>
          </div>
          <div class="pFoot">
            <span class="wjModel">{{item.views}} 浏览</span>
            <span class="wjModel">{{item.comment_count}} 评论</span>
            <span class="wjModel">{{item.collection}} 收藏</span>
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
import index from './index.js';
export default index;
</script>
