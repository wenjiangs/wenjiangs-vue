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
          <div class="formItem">
            <input type="text" name="user_login" placeholder="用户名"/>
          </div>
          <div class="formItem">
            <input type="text" name="user_email" placeholder="邮箱地址"/>
          </div>
          <div class="formItem">
            <input type="password" name="user_password" placeholder="登录密码"/>
          </div>
          <div class="formItem formItemAgreement">
            <label><input type="checkbox"/> 我已阅读并同意<span>《用户协议》</span>。</label>
          </div>
          <div class="formItem formItemBtn">
            <button type="button" class="button button-info button-fill button-block">注册</button>
          </div>
          <div class="regOthor">
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
  import register from './register.js';
  export default register;
</script>
