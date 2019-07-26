const Tabbar = () => import('@/components/Tabbar')

const loginRouter = {
  path: '/login',
  name: 'login',
  component: () => import('@/views/Login')
}
const settingsRouter = {
  path: '/settings',
  name: 'settings',
  component: () => import('@/views/Settings')
}
const wyIndexRouter = {
  path: '/wyIndex',
  name: 'wyIndex',
  component: () => import('@/views/wanyuanTravel/WyIndex')
}
const wyMyRouter = {
  path: '/wyMy',
  name: 'wyMy',
  component: () => import('@/views/wanyuanTravel/WyMy')
}
const wyTripManageRouter = {
  path: '/wyTripManage',
  name: 'wyTripManage',
  component: () => import('@/views/wanyuanTravel/businessTravel/WyTripManage')
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

export const appRoutes = []

// 所有上面定义的路由都要写在下面的routes里
export const routes = [
  loginRouter,
  settingsRouter,
  mainRouter,
  wyIndexRouter,
  wyMyRouter,
  wyTripManageRouter
]
