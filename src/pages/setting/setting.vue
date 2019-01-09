<template>
  <div class="page grayBg">
    <div class="bottomBtn">
      <button class="button button-danger button-fill">退出登录</button>
    </div>
    <div class="content">
      <div class="listBlock">
        <div class="listItem hasRight settingAvatar">
          <div class="listTitle">头像</div>
          <div class="listContent">
            <img :src="userInfo.user_avatar"/>
          </div>
        </div>
      </div>
      <div class="listBlockTitle">基本信息</div>
      <div class="listBlock">
        <div class="listItem hasRight">
          <div class="listTitle">昵称</div>
          <div class="listContent">{{userInfo.display_name}}</div>
        </div>
        <div class="listItem hasRight">
          <div class="listTitle">个性网址</div>
          <div class="listContent">{{userInfo.user_url}}</div>
        </div>
        <div class="listItem hasRight">
          <div class="listTitle">地址</div>
          <div class="listContent">{{userInfo.location}}</div>
        </div>
        <div class="listItem hasRight">
          <div class="listTitle">个性说明</div>
          <div class="listContent"></div>
        </div>
        <div class="listItem">
          <div class="listTitle">注册时间</div>
          <div class="listContent">{{userInfo.user_registered}}</div>
        </div>
      </div>
      <div class="listBlockTitle">账户安全</div>
      <div class="listBlock">
        <div class="listItem">
          <div class="listTitle">账号（不可修改）</div>
          <div class="listContent">{{userInfo.user_login}}</div>
        </div>
        <div class="listItem hasRight">
          <div class="listTitle">修改登录密码</div>
          <div class="listContent"></div>
        </div>
        <div class="listItem hasRight">
          <div class="listTitle">手机号</div>
          <div class="listContent">{{userInfo.mobile_phone}}</div>
        </div>
        <div class="listItem hasRight">
          <div class="listTitle">邮箱</div>
          <div class="listContent">{{userInfo.user_email}}</div>
        </div>
        <div class="listItem hasRight">
          <div class="listTitle">登录日志</div>
          <div class="listContent"></div>
        </div>
      </div>
      <div class="listBlockTitle">账号管理</div>
      <div class="listBlock">
        <div class="listItem">
          <div class="listTitle">冻结账户</div>
          <div class="listContent"></div>
        </div>
        <div class="listItem">
          <div class="listTitle">删除我的账户</div>
          <div class="listContent"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import setting from './setting.js';
  export default setting;
</script>
