import { getCategoryDataAPI } from '@/apis/category'
import { ref } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'
import { useRoute } from 'vue-router'

export const useCategory = () => {
  const route = useRoute()
  const categoryData = ref({})
  const getCategoryData = async (id = route.params.id) => {
    const { result } = await getCategoryDataAPI(id)
    categoryData.value = result
  }
  getCategoryData()
  onBeforeRouteUpdate((to) => {
    getCategoryData(to.params.id)
  })

  return {
    categoryData
  }
}
