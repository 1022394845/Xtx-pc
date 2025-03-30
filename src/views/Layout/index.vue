<script setup>
import LayoutFixedNav from './components/LayoutFixedNav.vue'
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import { useCategoryStore } from '@/stores/category'
import { useBannerStore } from '@/stores/banner'
import { onMounted } from 'vue'

const categoryStore = useCategoryStore()
const bannerStore = useBannerStore()
onMounted(() => {
  categoryStore.getCategoryList()
  bannerStore.getBannerList()
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
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <!-- 底部 -->
    <LayoutFooter></LayoutFooter>
  </div>
</template>

<style lang="scss">
// 路由切换过渡
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from {
  opacity: 0;
}
.fade-leave-to {
  opacity: 0;
}
</style>
