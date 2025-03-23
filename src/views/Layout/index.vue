<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
</script>
<template>
  <div>
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
