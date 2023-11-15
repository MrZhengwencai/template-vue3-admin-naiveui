/*
 * @Author: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @Date: 2023-10-25 11:33:42
 * @LastEditors: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @LastEditTime: 2023-10-26 16:47:40
 * @FilePath: \vue-naive-admin-main\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/** 重置样式 */
import '@/styles/reset.css'
import 'uno.css'
import '@/styles/global.scss'
import 'virtual:svg-icons-register'
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
import { initQianKun } from '@/qiankun'
import { createApp } from 'vue'

import 'echarts'
import VChart from 'vue-echarts'
import { setupStore } from '@/store'
import App from './App.vue'
import { setupNaiveDiscreteApi } from './utils'
import '@/router/permission'
import { router } from '@/router'
const app = createApp(App)
async function setupApp() {
  setupStore(app)
  setupNaiveDiscreteApi()
  app.use(router)
}
app.component('VChart', VChart)
setupApp()
const render = (container) => {
  console.log('container', container, qiankunWindow, window)
  // 如果是在主应用的环境下就挂载主应用的节点，否则挂载到本地
  const appDom = container ? container : '#app'
  app.mount(appDom)
}
// 接入乾坤
initQianKun(render)
// 判断是否为乾坤环境，否则会报错iqiankun]: Target container with #subAppContainerVue3 not existed while subAppVue3 mounting!
qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun(render) : render(null)
