import { renderWithQiankun } from 'vite-plugin-qiankun/dist/helper'
// 接入乾坤
export const initQianKun = (render) => {
  renderWithQiankun({
    // bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap
    // 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等
    bootstrap() {
      console.log('bootstrap')
    },
    // 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法，也可以接受主应用传来的参数
    mount(_props) {
      console.log('mount', _props)
      render(_props.container)
    },
    // 应用每次 切出/卸载 会调用的unmount方法，通常在这里我们会卸载微应用的应用实例
    unmount(_props) {
      console.log('unmount', _props)
    },
    update: function (props) {
      console.log('update', props)
    },
  })
}
