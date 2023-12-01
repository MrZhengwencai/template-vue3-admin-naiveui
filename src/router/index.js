/*
 * @Author: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @Date: 2023-10-25 11:33:42
 * @LastEditors: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @LastEditTime: 2023-12-01 09:39:45
 * @FilePath: \vue-naive-admin-main\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from 'vue-router'
import { basicRoutes } from './routes'

export const router = createRouter({
  history: createWebHistory('/eedh'),
  routes: basicRoutes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})
