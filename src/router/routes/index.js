/*
 * @Author: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @Date: 2023-10-25 11:33:42
 * @LastEditors: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @LastEditTime: 2023-12-01 10:09:30
 * @FilePath: \vue-naive-admin-main\src\router\routes\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//const Layout = () => import('@/layout/index.vue')
import workbench from './modules/workbench'

export const basicRoutes = [
  {
    name: 'dashboard',
    path: '/',
    redirect: '/home',
    component: () => import('@/views/error-page/404.vue'),
    isHidden: true,
  },
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    isHidden: true,
  },
  {
    name: 'noPermission',
    path: '/noPermission',
    component: () => import('@/views/error-page/noPermission.vue'),
    isHidden: true,
  },
]

export const NOT_FOUND_ROUTE = {
  name: 'NotFound',
  path: '/:pathMatch(.*)*',
  redirect: '/404',
  isHidden: true,
}

export const EMPTY_ROUTE = {
  name: 'Empty',
  path: '/:pathMatch(.*)*',
  component: null,
}

// const modules = import.meta.glob('@/router/routes/modules/*.js', { eager: true })
const asyncRoutes = [workbench]
// Object.keys(modules).forEach((key) => {
//   asyncRoutes.push(modules[key].default)
// })
console.log('asyncRoutes', asyncRoutes)
export { asyncRoutes }
