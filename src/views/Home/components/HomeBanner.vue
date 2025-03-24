<script setup>
import { useBannerStore } from '@/stores/banner'

defineProps({
  height: {
    type: Number
  },
  show: {
    type: Boolean
  }
})
const bannerStore = useBannerStore()
</script>

<template>
  <div class="home-banner" v-if="bannerStore.bannerList.length" v-show="show">
    <el-carousel :height="height + 'px'" :autoplay="show" :interval="5000">
      <el-carousel-item v-for="item in bannerStore.bannerList" :key="item.id">
        <img :src="item.imgUrl" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">
.home-banner {
  width: 990px;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
