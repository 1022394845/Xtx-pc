<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeNews from './components/HomeNews.vue'
import HomeHots from './components/HomeHots.vue'
import HomeProduct from './components/HomeProduct.vue'
</script>

<template>
  <div class="home">
    <div class="container">
      <HomeCategory></HomeCategory>
    </div>
    <HomeNews></HomeNews>
    <HomeHots></HomeHots>
    <HomeProduct></HomeProduct>
  </div>
</template>
