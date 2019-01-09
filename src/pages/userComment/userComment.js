import Vue from 'vue'

import { ConfirmPlugin, LoadingPlugin } from 'vux'
Vue.use(ConfirmPlugin, LoadingPlugin)

export default {
  name: 'userPost',
  data () {
    return {
      tabIndex: 1,
      pageTitle: this.$route.meta.title,
      page: 0,
      rows: 20,
      userInfo: {},
      dataList: [],
      noMore: false,
      isLoading: false,
    }
  },
  methods:{
    clickTab(e){
      this.tabIndex = e;
      this.page = 0;
      this.noMore = false;
      this.dataList = [];
      this.getCommentByUser();
    },
    getCommentByUser(){
      if(this.isLoading) return;
      this.isLoading = true;
      this.page++;
      this.$vux.loading.show({
        text: '加载中',
      })
      this.axiosPost(this, 'userComments', {
        page: this.page,
        rows: this.rows,
        user_id: this.userInfo.ID,
        token: this.userInfo.token,
        post_type: 'post',
        dataType: this.tabIndex,
      }, (res)=>{
        this.$vux.loading.hide();
        this.dataList.push(...res.data);
        if(res.data.length < this.pageRow){
          this.noMore = true;
        }
        this.isLoading = false;
      })
    }
  },
  mounted(){
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    this.getCommentByUser();
  }
}
