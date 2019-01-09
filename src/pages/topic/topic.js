import Vue from 'vue'

import { ConfirmPlugin, LoadingPlugin } from 'vux'
Vue.use(ConfirmPlugin, LoadingPlugin)

export default {
  name: 'topic',
  data () {
    return {
      page: 0,
      rows: 10,
      dataList:[],
      isLoading: false,
      noMore: false,
      pageTitle: this.$route.meta.title
    }
  },
  methods:{
    loadData(){
      this.page++;
      this.$vux.loading.show({
        text: '加载中',
      })
      this.axiosPost(this, 'getPosts', {
        page: this.page,
        rows: this.rows,
        postType: "topic",
        taxonomy: "group",
        sp: 1,
      }, (res)=>{
        this.$vux.loading.hide();
        this.dataList.push(...res.data)
        if(res.data.length < this.pageRow){
          this.noMore = true;
        }
      })
    }
  },
  created(){

  },
  mounted(){
    this.loadData();
  },
  watch: {
    $route(to, from) {
      // 记录滚动条位置
      if(to.name=='topic') {
        var csTop = localStorage.getItem(to.name + 'Top');
        if (csTop) {
          this.$refs.content.scrollTop = csTop;
        }
      }else{
        localStorage.setItem(from.name + 'Top', this.$refs.content.scrollTop)
      }
    }
  }
}
