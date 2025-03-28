import { cartAddAPI, cartDeleteAPI, getCartListAPI } from '@/apis/cart'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const cartList = ref([])
  const getCartList = async () => {
    const { result } = await getCartListAPI()
    cartList.value = result
  }
  const cartAdd = async ({ skuId, count }) => {
    await cartAddAPI({ skuId, count })
    ElMessage.success('添加购物车成功')
    getCartList()
  }
  const cartDelete = async (skuId) => {
    await cartDeleteAPI([skuId])
    ElMessage.success('删除商品成功')
    getCartList()
  }
  // 商品总数
  const allCount = computed(() =>
    cartList.value.reduce((sum, item) => sum + item.count, 0)
  )
  // 商品总价
  const allPrice = computed(() =>
    cartList.value.reduce((sum, item) => sum + item.count * item.price, 0)
  )
  // 全选状态
  const checkAll = (selected) => {
    cartList.value.forEach((item) => (item.selected = selected))
  }

  return {
    cartList,
    getCartList,
    cartAdd,
    cartDelete,
    allCount,
    allPrice,
    checkAll
  }
})
