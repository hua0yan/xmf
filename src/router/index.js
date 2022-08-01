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
        path: '/home/3-1',
        component: () => import('@/views/kunei/kn01')
      },
      {
        path: '/home/3-2',
        component: () => import('@/views/kunei/kn02')
      },
      // 增加仓库

      {
        path: '/home/addhouse',
        component: () => import('@/views/jichuxinxi/ck01/Addhouse')
      },

      // 增加库区
      {
        path: '/home/kqaddhouse',
        component: () => import('@/views/jichuxinxi/ck02/Addhouse')
      },

      // 增加库内
      {
        path: '/home/knaddhouse',
        component: () => import('@/views/kunei/kn01/KNaddHouse')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
