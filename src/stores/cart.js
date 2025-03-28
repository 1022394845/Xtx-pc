import { cartAddAPI, cartDeleteAPI, getCartListAPI } from '@/apis/cart'
import { defineStore } from 'pinia'
import { ref } from 'vue'

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

  return {
    cartList,
    getCartList,
    cartAdd,
    cartDelete
  }
})
