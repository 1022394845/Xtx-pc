import request from '@/utils/request'

// 获取二级分类
export const getCategoryDataAPI = (id) =>
  request.get('/category', {
    params: { id }
  })

// 获取banner列表
export const getBannerListAPI = () =>
  request.get('/home/banner', {
    params: { distributionSite: 2 }
  })

// 获取二级分类列表数据
export const getCategoryFilterAPI = (id) =>
  request.get('/category/sub/filter', {
    params: { id }
  })
