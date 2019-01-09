import Vue from 'vue'

import { ConfirmPlugin, LoadingPlugin } from 'vux'
Vue.use(ConfirmPlugin, LoadingPlugin)

export default {
  name: 'page',
  data () {
    return {
      pageTitle: this.$route.meta.title,
      pages: [],
      curPage: {},
      tabIndex: 0,
    }
  },
  methods:{
    getPages(){
      this.$vux.loading.show({
        text: '加载中'
      });
      this.axiosPost(this, 'getPages', {}, (res)=>{
        this.$vux.loading.hide();
        this.pages = res.data;
        this.curPage = this.pages[0].content
      })
    },
    clickTabs(e){
      this.tabIndex = e;
      this.curPage = this.pages[e].content;
    }
  },
  created(){

  },
  mounted(){
    this.getPages();
  }
}
