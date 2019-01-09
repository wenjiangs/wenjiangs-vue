import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index/index.vue'
import single from '@/pages/single/single.vue'
import login from '@/pages/login/login.vue'
import register from '@/pages/register/register.vue'
import ucenter from '@/pages/ucenter/ucenter.vue'
import topic from '@/pages/topic/topic.vue'
import message from '@/pages/message/message.vue'
import messageSingle from '@/pages/messageSingle/messageSingle.vue'
import docs from '@/pages/docs/docs.vue'
import docsSingle from '@/pages/docsSingle/docsSingle.vue'
import page from '@/pages/page/page.vue'
import setting from '@/pages/setting/setting.vue'
import feedback from '@/pages/feedback/feedback.vue'
import userPost from '@/pages/userPost/userPost.vue'
import userComment from '@/pages/userComment/userComment.vue'
import userTopic from '@/pages/userTopic/userTopic.vue'
import userReply from '@/pages/userReply/userReply.vue'
import userCollection from '@/pages/userCollection/userCollection.vue'
import postEdit from '@/pages/postEdit/postEdit.vue'
import error from '@/pages/error/error.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'index', component: index, meta:{auth: false, index: 1, title: '首页'}},
    {path: '/single', name: 'single', component: single, meta:{auth: false, index: 15, title: '文章详情'}},
    {path: '/login', name: 'login', component: login, meta:{auth: false, index: 16, title: '登录'}},
    {path: '/register', name: 'register', component: register, meta:{auth: false, index: 16, title: '注册账号'}},
    {path: '/ucenter', name: 'ucenter', component: ucenter, meta:{auth: false, index: 5, title: '用户中心'}},
    {path: '/topic', name: 'topic', component: topic, meta:{auth: false, index: 2, title: '社区话题'}},
    {path: '/message', name: 'message', component: message, meta:{auth: true, index: 3, title: '消息通知'}},
    {path: '/messageSingle', name: 'messageSingle', component: messageSingle, meta:{auth: true, index: 13, title: '消息通知'}},
    {path: '/docs', name: 'docs', component: docs, meta:{auth: false, index: 4, title: '专辑'}},
    {path: '/docsSingle', name: 'docsSingle', component: docsSingle, meta:{auth: false, index: 12, title: '专辑详情'}},
    {path: '/page', name: 'page', component: page, meta:{auth: false, index: 10, title: '单页详情'}},
    {path: '/setting', name: 'setting', component: setting, meta:{auth: true, index: 10, title: '账号设置'}},
    {path: '/feedback', name: 'feedback', component: feedback, meta:{auth: true, index: 10, title: '意见反馈'}},
    {path: '/userPost', name: 'userPost', component: userPost, meta:{auth: true, index: 10, title: '我的文章'}},
    {path: '/userComment', name: 'userComment', component: userComment, meta:{auth: true, index: 10, title: '我的评论'}},
    {path: '/userTopic', name: 'userTopic', component: userTopic, meta:{auth: true, index: 10, title: '我的话题'}},
    {path: '/userReply', name: 'userReply', component: userReply, meta:{auth: true, index: 10, title: '我的回复'}},
    {path: '/userCollection', name: 'userCollection', component: userCollection, meta:{auth: true, index: 10, title: '我的收藏'}},
    {path: '/postEdit', name: 'postEdit', component: postEdit, meta:{auth: true, index: 20, title: '编辑'}},
    {path: '*', name: 'error', component: error, meta:{auth: false, index: 50, title: '出错了'}}
  ]
})
