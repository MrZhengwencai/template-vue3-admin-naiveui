/*
 * @Author: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @Date: 2023-11-03 15:42:43
 * @LastEditors: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @LastEditTime: 2023-11-24 18:30:36
 * @FilePath: \dd-static\src\hooks\weatherData.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import dayjs from 'dayjs'
import homeApi from '@/api/home/home'
import { useUserStore } from '@/store'

export function useWeather() {
  const currentTime = ref(null)
  const user = useUserStore()
  function getWeather() {
    return new Promise((resolve, reject) => {
      homeApi
        .getTodayWeather({
          date: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'),
          limitCount: 10,
          tenantId: user.userInfo.tenantId,
          format: 'M/d',
          city: user.userInfoData.organ.city,
        })
        .then((res) => {
          console.log('res--', res)
          resolve(res.result)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
  const time = setInterval(() => {
    getTime()
  }, 1000)
  function getTime() {
    const date = new Date()
    currentTime.value = dayjs(date).format('YYYY-MM-DD HH:mm:ss')
  }
  // getTime()
  return {
    time,
    currentTime,
    getWeather,
  }
}
