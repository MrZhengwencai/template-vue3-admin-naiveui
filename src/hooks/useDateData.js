/*
 * @Author: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @Date: 2023-11-10 14:26:40
 * @LastEditors: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @LastEditTime: 2023-12-01 16:08:26
 * @FilePath: \dd-static\src\hooks\useDateData.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import dayjs from 'dayjs'
export function useDateData() {
  //本月第一天
  const start_moth_time = dayjs().startOf('month').format('YYYY-MM-DD')
  //本季度
  const start_quarter_time = getQuarterStartDate()
  console.log('start_quarter_time', start_quarter_time)
  //本年度
  const start_year_time = dayjs().startOf('year').format('YYYY-MM-DD')
  // 当前月
  const current_moth = dayjs(new Date()).format('YYYY-MM')
  //当天
  const end_time = dayjs(new Date()).format('YYYY-MM-DD')

  //获得本季度的开始月份
  function getQuarterStartMonth() {
    const nowDate = new Date()
    const nowMonth = nowDate.getMonth()
    let quarterStartMonth = 0
    if (nowMonth < 3) {
      quarterStartMonth = 0
    }
    if (2 < nowMonth && nowMonth < 6) {
      quarterStartMonth = 3
    }
    if (5 < nowMonth && nowMonth < 9) {
      quarterStartMonth = 6
    }
    if (nowMonth > 8) {
      quarterStartMonth = 9
    }
    return quarterStartMonth
  }
  function getQuarterStartDate() {
    let nowYear = dayjs().year() //当前年
    console.log('nowYear', nowYear)
    var quarterStartDate = new Date(nowYear, getQuarterStartMonth(), 1)
    return dayjs(quarterStartDate).format('YYYY-MM-DD')
  }
  // 最近几年的第一天
  function startDay(num) {
    const currentYear = dayjs().startOf('year').format('YYYY')
    const startYear = Number(currentYear) - num + 1
    console.log('currentYear', num, startYear, currentYear)
    return [`${startYear}T00:00:00`, `${end_time}T23:59:59`]
  }
  return {
    start_moth_time,
    start_quarter_time,
    start_year_time,
    end_time,
    startDay,
    current_moth,
  }
}
