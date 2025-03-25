import request from '@/utils/request'

// 获取二级分类
export const getCategoryDataAPI = (id) =>
  request.get('/category', {
    params: { id }
  })
