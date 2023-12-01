/*
 * @Author: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @Date: 2023-10-30 18:11:30
 * @LastEditors: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @LastEditTime: 2023-10-30 18:27:06
 * @FilePath: \dd-static\src\utils\common\flexible.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 自调用
;(function () {
  /* 页面加载获取页面宽度 */
  let setFont = function () {
    // 因为要定义变量可能和别的变量冲突，造成污染，所以用自调用函数
    let html = document.documentElement // 获取html
    // 获取html宽度
    let width = html.clientWidth

    // 判断，限制最小和最大宽度（这一步可省略）
    if (width < 1024) width = 1024
    if (width > 1920) width = 1920

    // 设置html的基准值, 1920 / 80 = 24px也就是1rem=24px
    let fontSize = width / 153 + 'px' // 那么这里屏幕大小1530px,1rem=10px

    // 设置给html
    html.style.fontSize = fontSize
  }
  setFont() // 调用

  /* 页面改变的时候需要重新设置 */
  // 尺寸改变事件,window.onresize为当浏览器重置大小的时候执行的函数
  window.onresize = function () {
    setFont()
  }
})()
