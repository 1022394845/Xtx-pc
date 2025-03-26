import request from '@/utils/request'

// 获取商品详情
export const getDetailAPI = (id) =>
  request.get('/goods', {
    params: { id }
  })

// 获取热榜数据
export const fetchHotListAPI = ({ id, type, limit = 3 }) =>
  request.get('/goods/hot', {
    params: { id, type, limit }
  })
