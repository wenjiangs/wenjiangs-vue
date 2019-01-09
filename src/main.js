// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import methods from './methods'
import config from './config'

import { AjaxPlugin } from 'vux'
Vue.use(AjaxPlugin)

Vue.config.productionTip = false

// 移动端调试
// import Vconsole from 'vconsole';
// const vConsole = new Vconsole();
// export default vConsole;

// 消除 300MS 延迟
const FastClick = require('fastclick')
FastClick.attach(document.body)

// 附加方法到 Vue 原型上
for(let key in methods){
  Vue.prototype[key] = methods[key];
}

for(let key in config){
  Vue.prototype[key] = config[key];
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
