import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getBannerListAPI } from '@/apis/layout'

export const useBannerStore = defineStore('banner', () => {
  // banner列表
  const bannerList = ref([])

  const getBannerList = async () => {
    const { result } = await getBannerListAPI()
    bannerList.value = result
  }

  return {
    bannerList,
    getBannerList
  }
})
