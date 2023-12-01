/*
 * @Author: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @Date: 2023-10-25 14:24:48
 * @LastEditors: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @LastEditTime: 2023-10-25 14:34:37
 * @FilePath: \vue-naive-admin-main\src\router\permission.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { router } from '@/router'
import { useUserStore, usePermissionStore } from '@/store'
import { toLogin } from '@/utils'

router.beforeEach((to, form, next) => {
  window.$loadingBar?.start()
  const noLoginPath = ['/404']
  if (noLoginPath.includes(to.path)) {
    next()
  } else {
    const userStore = useUserStore()
    // console.log('进来了', JSON.stringify(userStore))
    //判断是否有用户信息
    if (JSON.stringify(userStore.userInfoData) === '{}') {
      // 请求用户详情接口

      userStore
        .getUserInfo()
        .then((res) => {
          if (res) {
            const permissionStore = usePermissionStore()
            permissionStore
              .GenerateRoutes(res.result.authorityResults)
              .then((data) => {
                if (data) {
                  next({ ...to, replace: true })
                } else {
                  next({
                    path: '/noPermission',
                    query: {
                      msg: res && res.errorMessage,
                      code: res && res.errorCode,
                      loginUrl: res && res.redirectURL,
                    },
                  })
                }
              })
              .catch((err) => {
                next({ name: 'noPermission', query: { msg: `获取菜单出错了,因为${err}` } })
              })
          } else {
            // 没有获取用户信息就没有权限
            next({ name: 'noPermission', query: { msg: '获取用户信息失败' } })
            window.$loadingBar?.finish()
          }
        })
        .catch((error) => {
          console.log('error', error)
          setTimeout(() => {
            toLogin()
          }, 2000)
        })
    } else {
      next()
      window.$loadingBar?.finish()
    }
  }
})

router.afterEach(() => {
  window.$loadingBar?.finish()
})
