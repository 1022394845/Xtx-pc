import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 默认样式
import '@/styles/common.scss'

// 全局组件
import { componentPlugin } from '@/components/index'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(componentPlugin)

app.mount('#app')
