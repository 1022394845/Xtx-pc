<script setup>
import LayoutFixedNav from './components/LayoutFixedNav.vue'
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import { useCategoryStore } from '@/stores/category'
import { onMounted } from 'vue'

const categoryStore = useCategoryStore()
onMounted(() => {
  categoryStore.getCategoryList()
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
