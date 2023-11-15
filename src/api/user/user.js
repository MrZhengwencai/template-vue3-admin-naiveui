/*
 * @Author: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @Date: 2023-10-25 14:35:20
 * @LastEditors: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @LastEditTime: 2023-10-25 14:53:02
 * @FilePath: \vue-naive-admin-main\src\api\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Request from '@/utils/http/requestHttp'
const request = Request()
request.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL + '/commoditycenter'

export function getUserInfo(params) {
  return request.post('/lmuser/getUser', params)
}
