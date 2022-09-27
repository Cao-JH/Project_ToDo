import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// 配置SVG
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// 引入mock
import { viteMockServe } from "vite-plugin-mock"
const path = require('path')

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
    }),
    viteMockServe({
      mockPath: "./src/mock",
      supportTs: true     //如果使用 js发开，则需要配置 supportTs 为 false
    })
  ],
  // base: './'
  resolve: {
    // 设置路径别名
    alias: {
      '@': path.resolve(__dirname, './src'),
      '*': path.resolve('')
    }
  }
})
