import Vue from 'vue'

import { ConfirmPlugin, LoadingPlugin, Scroller } from 'vux'
Vue.use(ConfirmPlugin, LoadingPlugin)

export default {
  name: 'index',
  components: {
    Scroller
  },
  data () {
    return {
      userInfo: {},
    }
  },
  methods:{

  },
  created(){

  },
  mounted(){
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
  }
}
