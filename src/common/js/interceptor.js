/**
 * router intercept
 */
import router from './router'
import { readToken } from './util/cookie'
import 'nprogress/nprogress.css'

const whiteList = ['/login'] // noredirect list
router.beforeEach((to, from, next) => {
  // open bar
  NProgress.start()
  // user login permission
  if (readToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next({ path: `/login?redirect=${to.path}` })
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})