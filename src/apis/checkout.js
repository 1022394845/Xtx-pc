import request from '@/utils/request'

// 获取订单详情
export const getCheckInfoAPI = () => request.get('/member/order/pre')

// 提交订单
export const createOrderAPI = (data) => request.post('/member/order', data)
