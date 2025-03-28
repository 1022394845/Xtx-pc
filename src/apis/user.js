import request from '@/utils/request'

export const loginAPI = ({ account, password }) =>
  request.post('/login', { account, password })
