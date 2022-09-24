import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 引入SVG组件
import SvgIconVue from './components/SvgIcon.vue'
// 注册svg
import 'virtual:svg-icons-register'
// 引入markdown编辑器
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

// 主题使用
import Prism from 'prismjs';
VMdEditor.use(vuepressTheme, {
    Prism,
});

const app = createApp(App)
// 注册组件要传两个值，第一个值为使用的标签，第二个值为组件
app.use(router).component('svg-icon', SvgIconVue).use(VMdEditor)

app.mount('#app')