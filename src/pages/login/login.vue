<template>
  <div class="page">
    <div class="topNav" ref="topNav">
      <div class="tnLeft pull-left" @click="toRouter(-1,1,0)"><i class="iconfont icon-left"></i></div>
      <h1>{{pageTitle}}</h1>
    </div>
    <div class="content">
      <div class="formWrap lrFormWrap">
        <div class="lrFormWrapBox">
          <div class="lrLogo"><img src="http://www.wenjiangs.com/wp-content/themes/wtheme/images/logo_avatar.jpg"/></div>
          <div class="lrlInfo formItem formItemAgreement">登录注册即表示同意 <span>本站的用户协议和使用规范</span></div>
          <div class="formItem">
            <input type="text" name="user_login" v-model="user_login" placeholder="用户名"/>
          </div>
          <div class="formItem">
            <input type="password" name="user_pass" v-model="user_pass" placeholder="登录密码"/>
          </div>
          <div class="formItem formItemAgreement">
            <div class="pull-right">注册账号</div>
            <div>忘记密码？</div>
          </div>
          <div class="formItem formItemBtn">
            <button type="button" @click="checkForm" class="button button-info button-fill button-block">注册</button>
          </div>
          <div class="regOtherText">社交账号登录</div>
          <div class="regOther">
            <span><i class="iconfont icon-qq"></i></span>
            <span><i class="iconfont icon-weibo"></i></span>
            <span><i class="iconfont icon-douban"></i></span>
            <span><i class="iconfont icon-weixin"></i></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import login from './login.js';
  export default login;
</script>
