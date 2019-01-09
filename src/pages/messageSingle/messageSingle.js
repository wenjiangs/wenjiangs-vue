import Vue from 'vue'
import { ConfirmPlugin, LoadingPlugin, Actionsheet } from 'vux'
Vue.use(ConfirmPlugin, LoadingPlugin);
import verify from '../../plugins/verify.js'

export default {
  name: 'messageSingle',
  components: {
    Actionsheet
  },
  data () {
    return {
      pageTitle: '',
      msgList: [],
      accept_id: this.$route.query.ID,
      userInfo: {},
      isLoading: false,
      acceptUser: {},
      isShowMore: false,
      umList: {
        home: 'TA的主页',
        profile: '查看个人资料',
      },
      msgContent: '',
    }
  },
  methods:{
    getMessages() {
      if(this.isLoading) return;
      this.isLoading = true;
      this.$vux.loading.show({
        text: '加载中',
      });
      this.axiosPost(this, 'getMessages', {
        token: this.userInfo.token,
        user_id: this.userInfo.ID,
        accept_id: this.accept_id,
      }, (res)=>{
        this.isLoading = false;
        this.$vux.loading.hide();
        this.msgList = res.data;
      })
    },
    getUser(){
      this.axiosPost(this, 'getUser', {
        token: this.userInfo.token,
        user_id: this.userInfo.ID,
        accept_id: this.accept_id,
      }, (res)=>{
        this.acceptUser = res.data;
        this.pageTitle = res.data.display_name;
      })
    },
    moreClick(e){
      if(e=='cancel') return;
      this.$router.push(e)
    },
    showMore(){
      this.isShowMore = true;
    },
    sendMsg(){
      var verifyCon = [
        ['n', 'isEmpty', this.msgContent, '请输入内容'],
      ];
      var verifyRes = verify(verifyCon, true)
      if(verifyRes){
        this.$vux.toast.show({
          text: verifyRes[3],
          type: 'cancel',
          width: '10em'
        });
        return false;
      }
      this.axiosPost(this, 'sendMessage', {
        token: this.userInfo.token,
        user_id: this.userInfo.ID,
        send_id: this.userInfo.ID,
        accept_id: this.accept_id,
        content: this.msgContent,
      }, (res)=>{
        if(res.success){
          this.msgContent = '';
          this.msgList.push(res.data);
        }else{
          this.$vux.toast.text(res.message)
        }
      })
    }
  },
  created(){

  },
  mounted(){
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    this.getUser();
    this.getMessages();
  },
  activated() {
    this.accept_id = this.$route.query.ID;
    this.getUser();
    this.getMessages();
  },
  deactivated(){
    this.pageTitle = '';
    this.msgList = [];
  }
}
