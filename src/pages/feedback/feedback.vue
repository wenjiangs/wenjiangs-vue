<template>
  <div class="page">
    <div class="topNav" ref="topNav">
      <div class="tnLeft pull-left" @click="toRouter(-1,1,0)"><i class="iconfont icon-left"></i></div>
      <h1>{{pageTitle}}</h1>
    </div>
    <div class="content">
      <div class="formWrap">
        <div class="formItem">
          <input type="text" name="user_login" v-model="feedbackTitle" placeholder="意见反馈标题"/>
        </div>
        <div class="formItem">
          <textarea name="user_login" v-model="feedbackContent" placeholder="意见反馈内容"></textarea>
        </div>
        <div class="formItem formItemBtn">
          <button type="button" @click="checkForm" class="button button-info button-fill button-block">提交</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import feedback from './feedback.js';
  export default feedback;
</script>
