import request from '@/utils/request'

// 登录接口
export const loginAPI = ({ account, password }) =>
  request.post('/login', { account, password })

// 获取猜你喜欢列表
export const getLikeListAPI = ({ limit = 4 }) =>
  request.get('/goods/relevant', {
    params: { limit }
  })
