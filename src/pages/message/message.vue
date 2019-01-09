<template>
  <div class="page grayBg">
    <div class="bottomTool" ref="bottomTool">
      <div class="btItem" :class="{active:$route.name=='index'}" @click="toRouter('/')"><i class="iconfont icon-shouye"></i> 首页</div>
      <div class="btItem" :class="{active:$route.name=='topic'}" @click="toRouter('topic')"><i class="iconfont icon-shequguanli"></i> 社区</div>
      <div class="btItem" :class="{active:$route.name=='message'}" @click="toRouter('message')"><i class="iconfont icon-xiaoxi"></i> 消息</div>
      <div class="btItem" :class="{active:$route.name=='docs'}" @click="toRouter('docs')"><i class="iconfont icon-File"></i> 专辑</div>
      <div class="btItem" :class="{active:$route.name=='ucenter'}" @click="toRouter('ucenter')"><i class="iconfont icon-wode"></i> 我的</div>
    </div>
    <div class="tabs">
      <div class="tabItem" :class="{active: tabIndex==1}" @click="clickTabs(1)">消息</div>
      <div class="tabItem" :class="{active: tabIndex==2}" @click="clickTabs(2)">联系人</div>
      <div class="tabItem" :class="{active: tabIndex==3}" @click="clickTabs(3)">搜索</div>
    </div>
    <div class="content">
      <div class="messageList" v-if="dataList.length">
        <div class="messageItem" @click="toRouter({path:'messageSingle', query:{ID:item.user_id}})" v-for="item in dataList">
          <div class="messageIcon"><img :src="item.user_avatar"></div>
          <div class="messageText">
            <h3><span>{{item.send_time}}</span>{{item.display_name}}</h3>
            <p v-if="tabIndex==1">{{item.content}}</p>
            <p v-if="tabIndex==2">{{item.description}}</p>
          </div>
        </div>
      </div>
      <div class="empty" v-if="dataList.length==0">
        <div class="empty2">
          <div class="emptyIcon"></div>
          <div class="emptyText">暂无数据！</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import message from './message.js';
  export default message;
</script>
