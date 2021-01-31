import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Login from '@/views/m_login/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  }
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 导航守卫
// 使用 router.beforeEach注册一个全局前置守卫，判断用户是否登录
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    // 获取浏览器存储
    var token = localStorage.getItem('Authorization')
    if (to.path === '/' || to.path === '/bigdata') {
      next()
    } else {
      if (token === null || token === '') {
        next('/login')
      } else {
        next()
      }
    }
  }
})

export default router
