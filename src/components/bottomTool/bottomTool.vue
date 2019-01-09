<template>
  <div class="bottomTool" ref="bottomTool">
    <div class="btItem" :class="{active:cnn=='index'}" @click="toRouter('/')"><i class="iconfont icon-shouye"></i> 首页</div>
    <div class="btItem" :class="{active:cnn=='topic'}" @click="toRouter('topic')"><i class="iconfont icon-shequguanli"></i> 社区</div>
    <div class="btItem" :class="{active:cnn=='message'}" @click="toRouter('message')"><i class="iconfont icon-xiaoxi"></i> 消息</div>
    <div class="btItem" :class="{active:cnn=='docs'}" @click="toRouter('docs')"><i class="iconfont icon-File"></i> 专辑</div>
    <div class="btItem" :class="{active:cnn=='ucenter'}" @click="toRouter('ucenter')"><i class="iconfont icon-wode"></i> 我的</div>
  </div>
</template>
<script>
  import bottomTool from './bottomTool.js';
  export default bottomTool;
</script>
