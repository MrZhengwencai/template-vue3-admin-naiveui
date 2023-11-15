/*
 * @Author: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @Date: 2023-10-25 11:33:42
 * @LastEditors: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @LastEditTime: 2023-10-26 09:27:15
 * @FilePath: \vue-naive-admin-main\build\plugin\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import vue from '@vitejs/plugin-vue'

/**
 * * unocss插件，原子css
 * https://github.com/antfu/unocss
 */
import Unocss from 'unocss/vite'

// rollup打包分析插件
import visualizer from 'rollup-plugin-visualizer'
// 压缩
import viteCompression from 'vite-plugin-compression'
import qiankun from 'vite-plugin-qiankun'
import { configHtmlPlugin } from './html'

import unplugin from './unplugin'
import mkcert from 'vite-plugin-mkcert'
export function createVitePlugins(viteEnv, isBuild) {
  const plugins = [
    vue(),
    ...unplugin,
    configHtmlPlugin(viteEnv, isBuild),
    Unocss(),
    mkcert(),
    qiankun('vue3', {
      useDevMode: true,
    }),
  ]

  if (viteEnv.VITE_USE_COMPRESS) {
    plugins.push(viteCompression({ algorithm: viteEnv.VITE_COMPRESS_TYPE || 'gzip' }))
  }

  if (isBuild) {
    plugins.push(
      visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true,
      })
    )
  }

  return plugins
}
