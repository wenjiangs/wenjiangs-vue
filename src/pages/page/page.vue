<template>
  <div class="page">
    <div class="topNav" ref="topNav">
      <div class="tnLeft pull-left" @click="toRouter(-1,1,0)"><i class="iconfont icon-left"></i></div>
      <h1>{{pageTitle}}</h1>
    </div>
    <div class="tabs pageTabs">
      <div class="tabItem" v-for="(item, index) in pages" :class="{active: tabIndex==index}" @click="clickTabs(index)">{{item.title}}</div>
    </div>
    <div class="content">
      <div class="wjContent" v-html="curPage"></div>
    </div>
  </div>
</template>

<script>
  import page from './page.js';
  export default page;
</script>
