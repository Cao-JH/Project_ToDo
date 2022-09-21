import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// 配置SVG
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 添加SVG方法
    createSvgIconsPlugin({
      // 指定要处理的SVG文件地址
      iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
      // SVG文件的id
      symbolId: 'icon-[dir]-[name]'
    })
  ],
  base: './'
})
