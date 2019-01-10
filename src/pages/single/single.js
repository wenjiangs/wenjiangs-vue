import Vue from 'vue'

import { ConfirmPlugin, LoadingPlugin, Scroller } from 'vux'
import verify from "../../plugins/verify";
Vue.use(ConfirmPlugin, LoadingPlugin)

export default {
  name: 'single',
  components: {
    Scroller
  },
  data () {
    return {
      postID: this.$route.query.ID,
      post: {},
      pageTitle: this.$route.meta.title,
      relevantPosts: [],
      page: 0,
      rows: 10,
      comments: [],
      isLoading: false,
      noMore: false,
      // 是否已加载
      onLoading: false,
      userInfo: {},
      commentContent: '',
      isShowCoomentBox: false,
    }
  },
  methods:{
    getPost(cb){
      this.$vux.loading.show({
        text: '加载中',
      })
      var postParams = {postID: this.postID}
      if(!this.isEmpty(this.userInfo)){
        postParams.user_id = this.userInfo.ID;
        postParams.token = this.userInfo.token;
      }
      this.axiosPost(this, 'getPost', postParams, (res)=>{
        this.post = {};
        this.post = this.postBak = res.data;
        this.$vux.loading.hide();
        cb(res);
      })
    },
    getRelevantPosts(){
      this.axiosPost(this, 'getRelevantPosts', {}, (res)=>{
        this.relevantPosts = res.data;
      })
    },
    getComments(){
      this.page++;
      this.axiosPost(this, 'getComments', {
        postID: this.postID,
        page: this.page,
        rows: this.rows,
      }, (res)=>{
        this.comments.push(...res.data)
        if(res.data.length < this.rows){
          this.noMore = true;
        }
      })
    },
    initPage(){
      this.$vux.loading.show({
        text: '加载中',
      })
      this.page = 0;
      this.postID = this.$route.query.ID;
      this.getPost((res)=>{
        this.$refs.content.scrollTop = 0;
        this.postID = this.$route.query.ID;
        this.comments = [];
        this.getRelevantPosts();
        this.getComments();
      });
    },
    collection(ID, Type, cb){
      if(this.isEmpty(this.userInfo)){
        this.$vux.toast.text('请先登录');
        return;
      }
      this.$vux.loading.show({
        text: '请稍后',
      });
      this.axiosPost(this, 'collection', {
        token: this.userInfo.token,
        user_id: this.userInfo.ID,
        item_id: ID,
        item_type: Type
      }, (res)=>{
        this.$vux.loading.hide();
        this.$vux.toast.text(res.message);
        cb(res);

      })
    },
    postCollection(ID, Type){
      this.collection(ID, Type, (res)=>{
        if(res.code==1){
          this.$set(this.post, 'collection_current', true);
          this.$set(this.post, 'collection', this.post.collection+1);
        }else{
          this.$set(this.post, 'collection_current', false);
          this.$set(this.post, 'collection', this.post.collection-1);
        }
      })
    },
    authorCollection(ID, Type){
      this.collection(ID, Type, (res)=>{
        if(res.code==1){
          this.$set(this.post, 'collection_author', true);
        }else{
          this.$set(this.post, 'collection_author', false);
        }
      })
    },
    showCommentBox(){
      this.isShowCoomentBox = true;
    },
    sendComment(){
      if(this.isEmpty(this.userInfo)){
        this.$vux.toast.text('请先登录');
        return;
      }
      var verifyCon = [
        ['n', 'isEmpty', this.commentContent, '请输入内容'],
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
      this.$vux.loading.show({
        text: '请稍后',
      })
      this.axiosPost(this, 'postComment', {
        token: this.userInfo.token,
        user_id: this.userInfo.ID,
        comment_parent: 0,
        comment_content: this.commentContent,
        comment_post_ID: this.postID,
        comment_author: this.userInfo.display_name,
        comment_author_email: this.userInfo.user_email,
      }, (res)=>{
        this.$vux.loading.hide();
        this.$vux.toast.text(res.message)
        if(res.success){
          this.isShowCoomentBox = false;
          this.commentContent = '';
          var temComments = this.comments
          this.comments = [];
          this.comments.push(res.data,...temComments);
        }
      })
    },
    toTrash(){
      this.$vux.loading.show({
        text: '删除中',
      })
      this.axiosPost(this, 'changePostStatus', {
        user_id: this.userInfo.ID,
        token: this.userInfo.token,
        post_id: this.postID,
        post_type: 'trash'
      }, (res)=>{
        this.$vux.loading.hide();
        this.$vux.toast.show({
          width: '12rem',
          type: 'text',
          text: res.message
        })
        if(res.success){
          this.$router.go(-1);
        }
      })
    },
  },
  created(){
  },
  mounted(){
    this.onLoading = true;
    var userInfo = localStorage.getItem('userInfo');
    if(!this.isEmpty(userInfo)){
      this.userInfo = JSON.parse(userInfo);
    }
    this.getPost((res)=>{
      this.onLoading = false;
    });
    this.getRelevantPosts();
    this.getComments();
  },
  activated(){
    // 在mounted里面执行了下面就不执行
    if(this.onLoading) return;
    // console.log('activated');
    this.initPage();
  },
  deactivated(){
    this.post = {};
  },
  watch: {
    $route(to, from) {
      // 当前页跳转才执行
      if(to.name == from.name){
        // console.log('watch');
        this.initPage();
      }
    }
  }
}
