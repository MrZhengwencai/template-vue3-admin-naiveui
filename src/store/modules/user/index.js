/*
 * @Author: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @Date: 2023-10-25 11:33:42
 * @LastEditors: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @LastEditTime: 2023-10-25 17:50:19
 * @FilePath: \vue-naive-admin-main\src\store\modules\user\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia'
import { toLogin } from '@/utils'
import { getUserInfo } from '@/api/user/user'
import { useMessage } from 'naive-ui'

export const useUserStore = defineStore('user', {
  state() {
    return {
      userInfo: {},
      btnAuthor: [],
    }
  },
  getters: {
    userInfoData() {
      return this.userInfo
    },
    userId() {
      return this.userInfo?.id
    },
    name() {
      return this.userInfo?.name
    },
    avatar() {
      return this.userInfo?.avatar
    },
    role() {
      return this.userInfo?.role || []
    },
  },
  actions: {
    async getUserInfo() {
      try {
        const res = await getUserInfo({ systemId: 'SAAS_MALL' })
        if (res) {
          console.log('res---', res)
          this.userInfo = res.result
          this.btnAuthor = res.result.authorityResults
          return Promise.resolve(res)
        } else {
          const message = useMessage()
          message.error('获取用户信息失败,请重新登录')
          setTimeout(() => {
            toLogin()
          }, 2000)
        }
      } catch (error) {
        console.log('error', error)
        return Promise.reject(error)
      }
    },
    async logout() {
      toLogin()
    },
    setUserInfo(userInfo = {}) {
      this.userInfo = { ...this.userInfo, ...userInfo }
    },
  },
})
