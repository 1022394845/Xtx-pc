import request from '@/utils/request'

// 获取购物车列表
export const getCartListAPI = () => request.get('/member/cart')

// 加入购物车
export const cartAddAPI = ({ skuId, count }) =>
  request.post('/member/cart', { skuId, count })
