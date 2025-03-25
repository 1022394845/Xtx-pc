import { getBannerListAPI } from '@/apis/category'
import { ref } from 'vue'

export const useBanner = () => {
  const bannerList = ref([])
  const getBannerList = async () => {
    const { result } = await getBannerListAPI()
    bannerList.value = result
  }
  getBannerList()

  return {
    bannerList
  }
}
