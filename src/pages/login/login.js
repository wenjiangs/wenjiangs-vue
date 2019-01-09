import Vue from 'vue'
import verify from '../../plugins/verify.js'

import { ConfirmPlugin, LoadingPlugin, ToastPlugin } from 'vux'
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)
Vue.use(ConfirmPlugin)

export default {
  name: 'login',
  data () {
    return {
      pageTitle: this.$route.meta.title,
      user_login: '',
      user_pass: '',
    }
  },
  methods:{
    checkForm(){
      var verifyCon = [
        ['n', 'isEmpty', this.user_login, '请输入登录账号'],
        ['p', 'isEmpty', this.user_pass, '请输入登录密码'],
      ];

      var verifyRes = verify(verifyCon, true)
      if(verifyRes){
        this.$vux.toast.show({
          text: verifyRes[3],
          type: 'cancel',
          width: '10em'
        })
        return false;
      }
      this.login();
    },
    login(){
      this.$vux.loading.show({
        text: '登录中',
      })
      this.axiosPost(this, 'login', {
        user_login: this.user_login,
        user_pass: this.user_pass
      }, (res)=>{
        this.$vux.loading.hide();
        this.$vux.toast.show({
          text: res.message.replace(/<\/a.*>(.*)<\/a>/g, ''),
          type: 'cancel',
          width: '10em'
        })
        if(res.success){
          localStorage.setItem('userInfo', JSON.stringify(res.data));
          this.$router.replace('/');
        }
      })
    }
  },
  created(){

  },
  mounted(){

  }
}
