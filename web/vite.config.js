import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
// 导入自动导入和按需导入插件
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
// https://vitejs.dev/config/
export default defineConfig({
  // base: './', // 这里更改打包相对绝对路径
  base: './', // 这里更改打包相对绝对路径
  build: {
    outDir: 'dist',// 指定打包输出的目录为 dist
    rollupOptions: {
      output: {
      	// 在这里修改静态资源路径
        chunkFileNames: 'static/assets/js/[name]-[hash].js',
        entryFileNames: 'static/assets/js/[name]-[hash].js',
        assetFileNames: 'static/assets/[ext]/[name]-[hash].[ext]',
      }
    }
  },
  plugins: [
    vue(),
    VueSetupExtend(),
     // 配置自动导入
     AutoImport({
      imports: ['vue'],
      dts: 'src/auto-imports.d.ts',
    }),
    // 配置按需导入
    Components({
      resolvers: [VantResolver()],
      dts: 'src/components.d.ts',
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
       // additionalData: '@import "@/assets/global.scss";'
      }
    }
  },
  server: {
    open: true, // 在服务器启动时自动在浏览器中打开应用
    hmr: {
      overlay: true // 在页面上显示错误和警告的遮罩层
    },
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:4523/m1/3895832-0-default', // 这里填写你要代理的接口域名
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve('./src')
    }
  },
  // resolve: {
  //   alias: {
  //     '@': fileURLToPath(new URL('./src', import.meta.url))
  //   }
  // }
})

