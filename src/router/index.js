import { useUserStore } from '@/stores/user'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: () => import('@/views/Login/index.vue')
    },
    {
      path: '/',
      component: () => import('@/views/Layout/index.vue'),
      redirect: '/home',
      children: [
        {
          path: '/home',
          component: () => import('@/views/Home/index.vue')
        },
        {
          path: '/category',
          component: () => import('@/views/Category/index.vue')
        }
      ]
    }
  ]
})

// 登录权限拦截
router.beforeEach((to) => {
  // 没有token拦截至登录页面
  const userStore = useUserStore()
  if (!userStore.userInfo.token && to.path !== '/login') return '/login'
})

export default router
