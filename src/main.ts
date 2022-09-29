import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 引入SVG组件
import SvgIconVue from './components/SvgIcon.vue'
// 注册svg
import 'virtual:svg-icons-register'

const app = createApp(App)
// 注册组件要传两个值，第一个值为使用的标签，第二个值为组件
app.use(router)
app.component('svg-icon', SvgIconVue)

app.mount('#app')