// 倒计时
import { ref, computed, onUnmounted } from 'vue'
import dayjs from 'dayjs'

export const useCountdown = () => {
  const time = ref(0)
  // mm分ss秒
  const formatTime = computed(() => dayjs.unix(time.value).format('mm分ss秒'))
  // 开始倒计时
  let timer = null
  const start = (currentTime) => {
    time.value = currentTime
    timer = setInterval(() => {
      if (time.value <= 0) clearInterval(timer)
      time.value--
    }, 1000)
  }
  // 组件销毁清除计时器
  onUnmounted(() => {
    timer && clearInterval(timer)
  })
  return {
    formatTime,
    start
  }
}
