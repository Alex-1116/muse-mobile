const Tabbar = () => import('@/components/Tabbar')

const loginRouter = {
  path: '/login',
  name: 'login',
  component: () => import('@/views/Login')
}
const formItemRouter = {
  path: '/formItem',
  name: 'formItem',
  meta: {
    title: '',
    requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
  },
  component: () => import('@/views/Form')
}

const homeItemRouter = {
  path: '/homeItem',
  name: 'homeItem',
  meta: {
    title: '',
    requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
  },
  component: () => import('@/views/Home')
}

const mainRouter = {
  path: '/',
  name: 'tabbar',
  component: Tabbar,
  children: [
    { path: 'index', name: 'index', component: () => import('@/views/Index.vue'), },
    { path: 'serve', name: 'serve', component: () => import('@/views/Serve.vue') },
    { path: 'my', name: 'my', component: () => import('@/views/My.vue') },
  ]
};

export const appRoutes = [
  // { path: '/home', name: 'home', component: () => import('@/views/Home') },
  // { path: '/formItem', name: 'formItem', component: () => import('@/views/Form') }
]

// 所有上面定义的路由都要写在下面的routes里
export const routes = [
  loginRouter,
  mainRouter,
  formItemRouter,
  homeItemRouter
]
