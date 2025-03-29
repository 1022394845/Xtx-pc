import request from '@/utils/request'

export const getCheckInfoAPI = () => request.get('/member/order/pre')
