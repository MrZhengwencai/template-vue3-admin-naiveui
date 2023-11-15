/*
 * @Author: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @Date: 2023-10-25 11:33:42
 * @LastEditors: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @LastEditTime: 2023-10-25 18:21:35
 * @FilePath: \vue-naive-admin-main\src\store\modules\permission\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia'
import { asyncRoutes, basicRoutes, NOT_FOUND_ROUTE } from '@/router/routes'
import { router } from '@/router'
/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param frontRoutes
 * @param roles
 */

function filterAsyncRouter(frontRoutes, roles) {
  return frontRoutes
    .filter((item) => roles[item.authorityCode])
    .map((route) => {
      const sort = roles[route.authorityCode].sort || 0
      const tempRoute = Object.assign({ sort }, route)
      if (route.url) {
        tempRoute.path = route.url
      }
      if (tempRoute.children) {
        tempRoute.children = filterAsyncRouter(route.children, roles).sort(
          (a, b) => a.sort - b.sort
        )
      }
      return tempRoute
    })
}

function getRouteTree(routes) {
  const tempEntries = routes.reduce(
    (prev, cur) => ({
      ...prev,
      [cur.code]: cur,
    }),
    {}
  )
  const finalRoutes = filterAsyncRouter(asyncRoutes, tempEntries)
  console.log('finalRoutes', finalRoutes)
  return finalRoutes.concat(NOT_FOUND_ROUTE)
}
export const usePermissionStore = defineStore('permission', {
  state() {
    return {
      routers: [],
      addRouters: [],
    }
  },
  getters: {
    routes() {
      return this.routers
    },
    menus() {
      return this.routes.filter((route) => route.name && !route.isHidden)
    },
  },
  actions: {
    GenerateRoutes(authorityResults) {
      return new Promise((resolve, reject) => {
        try {
          const accessedRouters = getRouteTree(authorityResults || [])
          this.routers = this.routers.concat(basicRoutes).concat(accessedRouters)
          console.log('this.routers', this.routers)
          for (const route of this.routers) {
            router.addRoute(route) // 动态添加可访问路由
          }

          resolve(true)
        } catch (err) {
          reject(err)
        }
      })
    },
  },
})
