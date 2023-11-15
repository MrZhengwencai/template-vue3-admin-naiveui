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
      'Content-Type': 'application/json; charset=utf-8',
      'x-requested-with': 'XMLHttpRequest',
      sysCode: 'ihomeum',
      isSaas: true,
    })
  instance.interceptors.request.use((config) => {
    return config
  })
  instance.interceptors.response.use(
    (response) => {
      if (response.data.success) {
        return response.data
      } else {
        showMsg(response.data.errorMessage)
        return Promise.reject(response.data.errorMessage)
      }
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
