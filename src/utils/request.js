// 配置axios实例
import { useUserStore } from '@/stores/user'
import axios from 'axios'

const request = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

const userStore = useUserStore()
// axios请求拦截器
request.interceptors.request.use(
  (config) => {
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
    ElMessage.error(e.response.data.message || '服务异常')
    return Promise.reject(e)
  }
)

export default request
