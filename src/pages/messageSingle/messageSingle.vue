<template>
  <div class="page grayBg">
    <div class="topNav" ref="topNav">
      <div class="tnLeft pull-left" @click="toRouter(-1,1,0)"><i class="iconfont icon-left"></i></div>
      <div class="tnRight pull-right" @click="showMore"><i class="iconfont icon-gengduo"></i></div>
      <h1>{{pageTitle}}</h1>
    </div>
    <div class="sendBox">
      <div class="sendBtn pull-right"><button @click="sendMsg" class="button button-fill">发送</button></div>
      <div class="sendEmoji pull-right"><i class="iconfont icon-smile"></i></div>
      <div class="sendText">
        <textarea placeholder="请输入内容" v-model="msgContent"></textarea>
      </div>
    </div>
    <div class="content">
      <div class="chat-message">
        <div
          :class="item.user_id==userInfo.ID?'chat-show':'chat-send'"
          v-for="item in msgList">
          <div class="msg">
            <img :src="item.user_avatar">
            <p>{{item.content}}</p>
          </div>
        </div>
      </div>
      <actionsheet
        v-model="isShowMore"
        :menus="umList"
        @on-click-menu="moreClick"
        show-cancel></actionsheet>
    </div>
  </div>
</template>

<script>
  import messageSingle from './messageSingle.js';
  export default messageSingle;
</script>
