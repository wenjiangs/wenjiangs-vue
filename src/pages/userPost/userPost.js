import Vue from 'vue'

import { ConfirmPlugin, LoadingPlugin } from 'vux'
Vue.use(ConfirmPlugin, LoadingPlugin)

export default {
  name: 'userPost',
  data () {
    return {
      tabIndex: 0,
      pageTitle: this.$route.meta.title,
      page: 0,
      rows: 20,
      userInfo: {},
      postStatus: [
        { text: '全部', code: ['publish', 'pending', 'draft', 'trash'] },
        { text: '已发布', code: 'publish' },
        { text: '待审核', code: 'pending' },
        { text: '草稿箱', code: 'draft' },
        { text: '回收站', code: 'trash' },
      ],
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
      this.getPostByUser();
    },
    getPostByUser(){
      if(this.isLoading) return;
      this.isLoading = true;
      this.page++;
      this.$vux.loading.show({
        text: '加载中',
      })
      this.axiosPost(this, 'getPosts', {
        page: this.page,
        rows: this.rows,
        userID: this.userInfo.ID,
        postStatus: this.postStatus[this.tabIndex].code
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
  created(){

  },
  mounted(){
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    this.getPostByUser();
  }
}
