/*
 * @Author: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @Date: 2023-10-25 11:33:42
 * @LastEditors: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @LastEditTime: 2023-10-25 18:34:02
 * @FilePath: \vue-naive-admin-main\src\views\workbench\route.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const Layout = () => import('@/layout/index.vue')

export default {
  name: 'Dashboard',
  path: '/',
  component: Layout,
  redirect: '/workbench',
  authorityCode: 'SAAS_MALL_ATTRS_ADD_EDIT',
  children: [
    {
      name: 'Workbench',
      path: '/workbench',
      authorityCode: 'SAAS_MALL_ATTRS_ADD_EDIT',
      component: () => import('@/views/workbench/index.vue'),
      meta: {
        title: '工作台',
        icon: 'mdi:home',
        order: 0,
      },
    },
  ],
}
