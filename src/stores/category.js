import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryListAPI } from '@/apis/layout'

export const useCategoryStore = defineStore('category', () => {
  // 导航列表
  const categoryList = ref([])

  const getCategoryList = async () => {
    const { result } = await getCategoryListAPI()
    categoryList.value = result
  }

  return {
    categoryList,
    getCategoryList
  }
})
