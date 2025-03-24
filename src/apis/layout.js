import request from '@/utils/request'

// 获取首页一级导航列表
export const getCategoryListAPI = () => request.get('/home/category/head')

// 获取banner图
export const getBannerListAPI = () => request.get('/home/banner')

// 获取新鲜好物列表
export const getNewsListAPI = () => request.get('/home/new')

// 获取人气推荐列表
export const getHotsListAPI = () => request.get('/home/hot')
