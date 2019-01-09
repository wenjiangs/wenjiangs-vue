import Vue from 'vue'

import { ConfirmPlugin, LoadingPlugin } from 'vux'
Vue.use(ConfirmPlugin, LoadingPlugin)

export default {
  name: 'ucenter',
  data () {
    return {
      userInfo: {},
      isLogin: false,
    }
  },
  methods:{

  },
  created(){

  },
  mounted(){
    var userInfo = localStorage.getItem('userInfo');
    if(!this.isEmpty(userInfo)){
      this.userInfo = JSON.parse(userInfo);
      this.isLogin = true;
    }
  }
}
