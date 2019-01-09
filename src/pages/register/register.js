import Vue from 'vue'

import { ConfirmPlugin, LoadingPlugin } from 'vux'
Vue.use(ConfirmPlugin, LoadingPlugin)

export default {
  name: 'register',
  data () {
    return {
      pageTitle: this.$route.meta.title,
    }
  },
  methods:{

  },
  created(){

  },
  mounted(){

  }
}
