import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../components/HomeView.vue')
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/data',
    name: 'data',
    component: () => import('../components/DataView.vue')
  },
  {
    path: '/info',
    name: 'info',
    component: () => import('../components/InfoView.vue')
  },
  {
    path: '/set',
    name: 'set',
    component: () => import('../components/SetView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
