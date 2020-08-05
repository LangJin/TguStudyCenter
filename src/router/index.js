import Vue from 'vue'
import Router from 'vue-router'
import 'nprogress/nprogress.css'
Vue.use(Router)

// export default new Router({
const router = new Router({
  mode: 'history',
  routes: [{
      path: '/login',
      name: 'login',
      component: () => import( /* webpackChunkName: "login" */ '@/views/account/login')
    },
    {
      path: '/',
      component: () => import( /* webpackChunkName: "index" */ '@/views/index')
    },

    {
      path: '/classLearn',
      name: 'classLearn',
      component: () => import( /* webpackChunkName: "classManage" */ '@/views/classManage/classLearn')
    },

  ]
})
export default router
