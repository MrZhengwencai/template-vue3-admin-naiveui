/*
 * @Author: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @Date: 2023-10-27 17:52:27
 * @LastEditors: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @LastEditTime: 2023-12-01 09:38:19
 * @FilePath: \dd-static\src\utils\http\requestHttp.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'
import { toLogin } from '@/utils'
import { showMsg } from '@/utils/common/common'
// import * as NaiveUI from 'naive-ui'

export default function () {
  // 创建实例
  const instance = axios.create()
  // 设置默认选项
  instance.defaults.timeout = 30000
  ;(instance.defaults.method = 'post'),
    (instance.defaults.withCredentials = true),
    (instance.defaults.headers = {
      'Content-Type': 'application/json',
      'x-requested-with': 'XMLHttpRequest',
      sysCode: 'SAAS_EEDH',
      // HCP: 'c2dbe091027f42fbab40d2f1a1250704',
      isSaas: true,
    })
  instance.interceptors.request.use((config) => {
    return config
  })
  instance.interceptors.response.use(
    (response) => {
      return response.data
      // if (response.data.success || response.data.result) {
      //   return response.data
      // } else {
      //   showMsg(response.data.errorMessage)
      //   return Promise.reject(response.data.errorMessage)
      // }
    },
    (error) => {
      // 网络不通提示
      if (error.toString() === 'Error: Network Error') {
        showMsg('请检查您的网络环境是否联网！')
      }
      // 网络超时
      if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
        showMsg('网络请求超时！')
      }
      // 服务器抛错
      if (error.response) {
        const statusCode = error.response.status
        switch (statusCode) {
          case 400:
          case 401:
            toLogin()
            break
          case 404:
          case 500: // 服务器错误提示
            showMsg('服务器出错啦！')
            break
        }
      }
      Promise.resolve(error)
    }
  )
  return instance
}
