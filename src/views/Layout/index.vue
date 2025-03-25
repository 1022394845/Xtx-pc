<script setup>
import LayoutFixedNav from './components/LayoutFixedNav.vue'
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import { useCategoryStore } from '@/stores/category'
import { useBannerStore } from '@/stores/banner'
import { onBeforeRouteUpdate } from 'vue-router'

const categoryStore = useCategoryStore()
const bannerStore = useBannerStore()
categoryStore.getCategoryList()
bannerStore.getBannerList()

onBeforeRouteUpdate(() => {
  window.scrollTo(0, 0)
})
</script>
<template>
  <div>
    <!-- 吸顶导航 -->
    <LayoutFixedNav></LayoutFixedNav>
    <!-- 导航 -->
    <LayoutNav></LayoutNav>
    <!-- 头部 -->
    <LayoutHeader></LayoutHeader>
    <!-- 路由主体 -->
    <router-view></router-view>
    <!-- 底部 -->
    <LayoutFooter></LayoutFooter>
  </div>
</template>
