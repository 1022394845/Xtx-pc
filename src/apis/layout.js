import request from '@/utils/request'

// 获取首页一级导航列表
export const getCategoryListAPI = () => request.get('/home/category/head')

// 获取banner图
export const getBannerListAPI = () => request.get('/home/banner')
