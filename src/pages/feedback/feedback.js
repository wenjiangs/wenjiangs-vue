import Vue from 'vue'

import { ConfirmPlugin, LoadingPlugin, Scroller } from 'vux'
import verify from "../../plugins/verify";
Vue.use(ConfirmPlugin, LoadingPlugin)

export default {
  name: 'index',
  components: {
    Scroller
  },
  data () {
    return {
      pageTitle: this.$route.meta.title,
      feedbackTitle: '',
      feedbackContent: '',
      userInfo: {},
    }
  },
  methods:{
    checkForm(){
      var verifyCon = [
        ['n', 'isEmpty', this.feedbackTitle, '请输入意见反馈标题'],
        ['p', 'isEmpty', this.feedbackContent, '请输入意见反馈内容'],
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
      this.submitData();
    },
    submitData(){
      this.$vux.loading.show({
        text: '提交中'
      })
      this.axiosPost(this, 'publishPost', {
        token: this.userInfo.token,
        user_id: this.userInfo.ID,
        post_title: this.feedbackTitle,
        post_content: this.feedbackContent,
        post_type: 'topic',
        post_category: 7,
      }, (res)=>{
        this.$vux.loading.hide();
        this.$vux.toast.text(res.message);
        if(res.success){
          this.feedbackTitle = '';
          this.feedbackContent = '';
          setTimeout(()=>{
            this.$router.go(-1);
          }, 2000);
        }
      })
    }
  },
  mounted(){
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
  }
}
