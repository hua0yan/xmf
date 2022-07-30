import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/home',
    component: () => import('@/views/Home'),
    children: [
      {
        path: '/home/work',
        component: () => import('@/views/Work')
      },
      {
        path: '/home/1-1',
        component: () => import('@/views/jichuxinxi/ck01')
      },
      {
        path: '/home/1-2',
        component: () => import('@/views/jichuxinxi/ck02')
      },
      {
        path: '/home/addhouse',
        component: () => import('@/views/jichuxinxi/ck01/Addhouse')
      },
      {
        path: '/home/kqaddhouse',
        component: () => import('@/views/jichuxinxi/ck02/Addhouse')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
