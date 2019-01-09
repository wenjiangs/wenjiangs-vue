<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import Vue from 'vue'
import { LoadingPlugin } from 'vux'
Vue.use(LoadingPlugin);
export default {
  name: 'App',
  data(){
    return {
      transitionName: 'slide-right',
    }
  },
  // 监听路由发生变化
  watch: {
    $route(to, from) {
      var that = this;
      //设置标题
      document.title = that.$route.meta.title;
      if(to.meta.index >= from.meta.index){
        this.transitionName = 'slide-left';
      }else{
        this.transitionName = 'slide-right';
      }
    },
  },
  //检查当前页面是否需要授权登录
  created(){
    if (this.$route.meta.auth){
      var userInfo = localStorage.getItem('userInfo');
      if(this.isEmpty(userInfo)){
        this.$router.replace({path: 'login'});
      }
    }
    document.title = this.$route.meta.title;
  },
  mounted(){
    // 路由卫士
    this.$router.beforeEach((to, from, next) => {
      if (to.meta.auth){
        var userInfo = localStorage.getItem('userInfo');
        if(this.isEmpty(userInfo)) {
          next({
            path: 'login'
          })
        }else{
          next();
        }
      }else{
        next();
      }
    })
  }
}
</script>
