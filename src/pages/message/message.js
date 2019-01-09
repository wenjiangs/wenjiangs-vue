import Vue from 'vue'

import { ConfirmPlugin, LoadingPlugin } from 'vux'
Vue.use(ConfirmPlugin, LoadingPlugin)

export default {
  name: 'message',
  data () {
    return {
      dataList: [],
      tabIndex: 1,
      chatList: [],
      contactList: [],
    }
  },
  methods:{
    getChatList(){
      this.$vux.loading.show({
        text: '加载中',
      })
      this.axiosPost(this, 'getChatList', {
        token: this.userInfo.token,
        user_id: this.userInfo.ID,
      }, (res)=>{
        this.$vux.loading.hide();
        this.dataList = res.data
        this.chatList = this.dataList;
      })
    },
    getContacts(){
      this.$vux.loading.show({
        text: '加载中',
      })
      this.axiosPost(this, 'getContacts', {
        token: this.userInfo.token,
        user_id: this.userInfo.ID,
      }, (res)=>{
        this.$vux.loading.hide();
        this.dataList = res.data
        this.contactList = this.dataList;
      })
    },
    clickTabs(e){
      if(e==1 && !(e==this.tabIndex)){
        this.dataList = [];
        if(this.isEmpty(this.chatList)){
          this.getChatList()
        }else{
          this.dataList = this.chatList
        }
      }else if(e==2 && !(e==this.tabIndex)){
        this.dataList = [];
        if(this.isEmpty(this.contactList)){
          this.getContacts();
        }else{
          this.dataList = this.contactList
        }
      }
      this.tabIndex = e;
    }
  },
  created(){
  },
  mounted(){
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    this.getChatList();
  },
  activated(){
    this.getChatList();
  }
}
