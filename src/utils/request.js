// 配置axios实例
import { useUserStore } from '@/stores/user'
import axios from 'axios'
import router from '@/router'

const request = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

// axios请求拦截器
request.interceptors.request.use(
  (config) => {
    const userStore = useUserStore()
    const token = userStore.userInfo.token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (e) => Promise.reject(e)
)

// axios响应式拦截器
request.interceptors.response.use(
  (res) => res.data,
  (e) => {
    const userStore = useUserStore()
    ElMessage.error(e.response.data.message || '服务异常')
    // token失效
    if (e.response.status === 401) {
      userStore.clearUserInfo()
      router.replace('/login')
    }
    return Promise.reject(e)
  }
)

export default request
