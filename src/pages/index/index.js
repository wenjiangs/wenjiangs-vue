import Vue from 'vue'

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import { ConfirmPlugin, LoadingPlugin } from 'vux'
Vue.use(ConfirmPlugin, LoadingPlugin)

export default {
  name: 'index',
  components: {
    swiper,
    swiperSlide,
  },
  data () {
    return {
      swiperOption: {
        autoplay: 3000,
        grabCursor : true,
        setWrapperSize :true,
        pagination: { el: ".swiper-pagination"},
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true,
        spaceBetween: 10,
      },
      categorySwiperOption: {},
      banner: [],
      category: [],
      catIndexID: '',
      page: 0,
      rows: 10,
      dataList:[],
      isLoading: false,
      noMore: false,
      pageTitle: this.$route.meta.title
    }
  },
  methods:{
    getBanner(){
      this.$vux.loading.show({
        text: '加载中',
      })
      this.axiosPost(this, 'getBanner', {}, (res)=>{
        this.$vux.loading.hide();
        if(res.success){
          this.banner = res.data;
        }
      })
    },
    getCats(){
      this.axiosPost(this, 'getCategories', {}, (res)=>{
        if(res.success){
          var allPostCat = {"term_id":'', "name":"全部"}
          this.category = [allPostCat, ...res.data];
        }
      })
    },
    loadData(){
      if(this.isLoading) return;
      this.isLoading = true;
      this.page++;
      this.axiosPost(this, 'getPosts', {
        page: this.page,
        rows: this.rows,
        catID: this.catIndexID,
      }, (res)=>{
        this.$vux.loading.hide();
        this.dataList.push(...res.data)
        if(res.data.length < this.rows){
          this.noMore = true;
        }
        this.isLoading = false;
      })
    },
    listenScroll(obj, currentObj, cb){
      currentObj.onscroll = ()=>{
        if((currentObj.scrollHeight-currentObj.clientHeight-50)<currentObj.scrollTop){
          cb();
        }
      }
    },
    tabClick(e){
      this.catIndexID = e;
      this.noMore = false;
      this.dataList = [];
      this.page = 0;
      this.$vux.loading.show({
        text: '加载中',
      })
      this.loadData();
    }
  },
  created(){
    this.categorySwiperOption = this.deepCopy(this.swiperOption);
    this.categorySwiperOption.slidesPerView = 5;
  },
  mounted(){
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    this.getBanner();
    this.getCats();
    this.loadData();
    this.listenScroll(this, this.$refs.content, ()=>{
      this.loadData();
    });
  },
  watch: {
    $route(to, from) {
      // 记录滚动条位置
      if(to.name=='index') {
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
