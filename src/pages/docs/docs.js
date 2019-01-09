import Vue from 'vue'

import { ConfirmPlugin, LoadingPlugin } from 'vux'
Vue.use(ConfirmPlugin, LoadingPlugin)

export default {
  name: 'docs',
  data () {
    return {
      initialsArr: ['A-E','F-K','L-Q','R-U','V-Z'],
      tabIndex: 0,
      dataList: [],
      page: 0,
      rows: 10,
      isLoading: false,
      noMore: false,
      pageTitle: this.$route.meta.title
    }
  },
  methods:{
    tabClick(e){
      this.tabIndex = e;
      // todo
    },
    loadData(){
      this.page++;
      this.axiosPost(this, 'getCategories', {
        page: this.page,
        rows: this.rows,
        taxonomy: 'docs',
      }, (res)=>{
        this.$vux.loading.hide();
        this.dataList.push(...res.data)
        if(res.data.length < this.pageRow){
          this.noMore = true;
        }
      })
    },
  },
  created(){

  },
  mounted(){
    this.loadData();
  }
}
