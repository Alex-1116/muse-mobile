import Vue from 'vue'
import VueRouter from 'vue-router'

import { routes, appRoutes } from './routes'
import { getToken } from '@/libs/auth'

Vue.use(VueRouter)

const Router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes,
  appRoutes,
  mode: 'history',
  base: process.env.VUE_ROUTER_BASE
})

Router.beforeEach((to, from, next) => {
  let token = getToken
  if (to.matched.some(record => record.meta.requireAuth)){  // 判断该路由是否需要登录权限
    if (token) {  // 判断当前的token是否存在
      next();
    }
    else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
});

export default Router
