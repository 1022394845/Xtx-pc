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
          path: '/category/:id',
          component: () => import('@/views/Category/index.vue')
        },
        {
          path: '/category/sub/:id',
          component: () => import('@/views/SubCategory/index.vue')
        },
        {
          path: '/detail/:id',
          component: () => import('@/views/Detail/index.vue')
        },
        {
          path: '/cartlist',
          component: () => import('@/views/CartList/index.vue')
        },
        {
          path: '/checkout',
          component: () => import('@/views/Checkout/index.vue')
        },
        {
          path: '/pay',
          component: () => import('@/views/Pay/index.vue')
        },
        {
          path: '/paycallback',
          component: () => import('@/views/Pay/PayBack.vue')
        },
        {
          path: '/user',
          component: () => import('@/views/User/index.vue'),
          redirect: '/user/info',
          children: [
            {
              path: '/user/info',
              component: () => import('@/views/User/components/UserInfo.vue')
            },
            {
              path: '/user/order',
              component: () => import('@/views/User/components/UserOrder.vue')
            }
          ]
        }
      ]
    }
  ],
  // 路由视口置顶
  scrollBehavior() {
    return {
      top: 0
    }
  }
})

// 登录权限拦截
const authURLs = ['/user', '/cartlist', '/checkout', '/pay']
router.beforeEach((to, from, next) => {
  // 没有token拦截至登录页面
  const userStore = useUserStore()
  if (!authURLs.includes(to.path)) return next() // 无关页面直接放行
  if (userStore.userInfo.token) return next() // 有登录权限
  return next('/login')
})

export default router
