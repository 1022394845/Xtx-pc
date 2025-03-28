<script setup>
import HomeBanner from './HomeBanner.vue'
import { useCategoryStore } from '@/stores/category'
import { ref } from 'vue'

const categoryStore = useCategoryStore()
// 鼠标悬停位置
const hoverState = ref(false)
const hoverIndex = ref(0)
const hover = (state, index = 0) => {
  hoverState.value = state
  hoverIndex.value = index
}
</script>

<template>
  <div class="home-category" @mouseleave="hover(false)">
    <ul class="menu">
      <li
        v-for="(item, index) in categoryStore.categoryList"
        :key="item"
        @mouseover="hover(true, index)"
      >
        <RouterLink :to="`/category/${item.id}`">{{ item.name }}</RouterLink>
        <RouterLink
          v-for="i in item.children.slice(0, 2)"
          :key="i.id"
          :to="`/category/sub/${i.id}`"
          >{{ i.name }}</RouterLink
        >
      </li>
    </ul>
    <!-- 弹层layer位置 -->
    <div class="detail" v-if="categoryStore.categoryList.length">
      <div class="layer" :class="{ show: hoverState }">
        <h4>分类推荐 <small>根据您的购买或浏览记录推荐</small></h4>
        <ul>
          <li
            v-for="item in categoryStore.categoryList[hoverIndex].goods"
            :key="item.id"
          >
            <RouterLink to="/">
              <img :src="item.picture" alt="" />
              <div class="info">
                <p class="name ellipsis-2">{{ item.name }}</p>
                <p class="desc ellipsis">{{ item.desc }}</p>
                <p class="price"><i>¥</i>{{ item.price }}</p>
              </div>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <HomeBanner
      :height="categoryStore.categoryList.length * 55"
      :show="!hoverState"
    ></HomeBanner>
  </div>
</template>

<style scoped lang="scss">
.home-category {
  display: flex;
  position: relative;

  .menu {
    z-index: 99;
    width: 250px;
    background: rgba(0, 0, 0, 0.8);
    li {
      padding-left: 40px;
      height: 55px;
      line-height: 55px;

      &:hover {
        background: $xtxColor;
      }

      a {
        margin-right: 4px;
        color: #fff;

        &:first-child {
          font-size: 16px;
        }
      }
    }
  }
  .detail {
    width: 990px;
    height: 100%;
    position: absolute;
    left: 250px;
    top: 0;
    overflow: hidden;

    .layer {
      height: 100%;
      background: rgba(255, 255, 255, 0.8);
      padding: 0 15px;
      transform: translateX(-100%);

      h4 {
        font-size: 20px;
        font-weight: normal;
        line-height: 80px;

        small {
          font-size: 16px;
          color: #666;
        }
      }

      ul {
        display: flex;
        flex-wrap: wrap;

        li {
          width: 310px;
          height: 120px;
          margin-right: 15px;
          margin-bottom: 15px;
          border: 1px solid #eee;
          border-radius: 4px;
          background: #fff;

          &:nth-child(3n) {
            margin-right: 0;
          }

          a {
            display: flex;
            width: 100%;
            height: 100%;
            align-items: center;
            padding: 10px;

            &:hover {
              background: #e3f9f4;
            }

            img {
              width: 95px;
              height: 95px;
            }

            .info {
              padding-left: 10px;
              line-height: 24px;
              overflow: hidden;

              .name {
                font-size: 16px;
                color: #666;
              }

              .desc {
                color: #999;
              }

              .price {
                font-size: 22px;
                color: $priceColor;

                i {
                  font-size: 16px;
                }
              }
            }
          }
        }
      }
    }
    // 弹窗显示
    .show {
      transform: none;
      transition: all 0.3s;
    }
  }
}
</style>
