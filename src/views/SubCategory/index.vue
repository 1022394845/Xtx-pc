<script setup>
import { getCategoryFilterAPI, getSubCategoryAPI } from '@/apis/category'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import GoodsItem from '@/components/GoodsItem.vue'

const route = useRoute()
// 面包屑
const filterData = ref({})
const getFilterData = async () => {
  const { result } = await getCategoryFilterAPI(route.params.id)
  filterData.value = result
}
getFilterData()

// 基础列表
const goodsList = ref([])
const reqData = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime'
})
const getGoodsList = async () => {
  const { result } = await getSubCategoryAPI(reqData.value)
  goodsList.value = result.items
}
getGoodsList()

// tab切换
const tabChange = () => {
  reqData.value.page = 1
  getGoodsList()
}

// 加载更多
const disabled = ref(false)
const load = async () => {
  reqData.value.page++
  const { result } = await getSubCategoryAPI(reqData.value)
  goodsList.value = [...goodsList.value, ...result.items]
  // 全部加载完毕 停止监听
  if (!result.items.length) {
    disabled.value = true
  }
}
</script>

<template>
  <div class="container">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item
          :to="{ path: `/category/${filterData.parentId}` }"
          >{{ filterData.parentName }}</el-breadcrumb-item
        >
        <el-breadcrumb-item>{{ filterData.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="reqData.sortField" @tab-change="tabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div
        class="body"
        v-infinite-scroll="load"
        :infinite-scroll-disabled="disabled"
      >
        <!-- 商品列表-->
        <GoodsItem
          v-for="goods in goodsList"
          :key="goods.id"
          :goods="goods"
        ></GoodsItem>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>
