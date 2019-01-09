import Vue from 'vue'

import { ConfirmPlugin, LoadingPlugin } from 'vux'
Vue.use(ConfirmPlugin, LoadingPlugin)

export default {
  name: 'docsSingle',
  data () {
    return {
      term: {},
      catID: this.$route.query.ID,
      pageTitle: this.$route.meta.title,
      tabIndex: 0,
      docsMenu: [],
      page: 0,
      rows: 20,
      docsComment: [],
      menuNoMore: false,
      commentNoMore: false,
    }
  },
  methods:{
    clickTabs(e){
      this.tabIndex = e;
    },
    getCategory(){
      this.$vux.loading.show({
        text: '加载中',
      })
      this.axiosPost(this, 'getCategory', {
        catID: this.catID,
        taxonomy: 'docs',
      }, (res)=>{
        this.$vux.loading.hide();
        this.term = res.data;
        this.pageTitle = res.data.name;
      })
    },
    getPosts(){
      this.page++;
      this.axiosPost(this, 'getPosts', {
        catID: this.catID,
        page: this.page,
        rows: this.rows,
        postType: 'doc',
        taxonomy: 'docs',
      }, (res)=>{
        this.docsMenu.push(...res.data);
      })
    },
    getDocsComment(){
      this.axiosPost(this, 'getDocsComment', {catID: this.catID}, (res)=>{
        this.docsComment = res.data;
        if(res.data.length<this.rows){
          this.commentNoMore = true;
        }
      })
    }
  },
  created(){

  },
  mounted(){
    this.getCategory();
    this.getPosts();
    this.getDocsComment();
  }
}
