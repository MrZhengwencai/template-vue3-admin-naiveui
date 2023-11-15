/*
 * @Author: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @Date: 2023-10-25 11:33:42
 * @LastEditors: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @LastEditTime: 2023-10-26 11:02:35
 * @FilePath: \vue-naive-admin-main\src\router\routes\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const Layout = () => import('@/layout/index.vue')

export const basicRoutes = [
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    isHidden: true,
  },
  {
    name: 'noPermission',
    path: '/noPermission',
    component: () => import('@/views/error-page/noPermission.vue'),
    isHidden: true,
  },
  {
    name: 'ExternalLink',
    path: '/external-link',
    authorityCode: 'SAAS_MALL_HOME_MGMT_M',
    component: Layout,
    meta: {
      title: '外部链接',
      icon: 'mdi:link-variant',
      order: 4,
    },
    children: [
      {
        name: 'LinkGithubSrc',
        authorityCode: 'SAAS_MALL_HOME_MGMT_M',
        path: 'https://github.com/zclzone/vue-naive-admin',
        meta: {
          title: '源码 - github',
          icon: 'mdi:github',
        },
      },
      {
        name: 'LinkGiteeSrc',
        authorityCode: 'SAAS_MALL_HOME_MGMT_M',
        path: 'https://gitee.com/zclzone/vue-naive-admin',
        meta: {
          title: '源码 - gitee',
          icon: 'simple-icons:gitee',
        },
      },
      {
        name: 'LinkDocs',
        authorityCode: 'SAAS_MALL_ATTRS_ADD_EDIT',
        path: 'https://zclzone.github.io/vue-naive-admin-docs',
        meta: {
          title: '文档 - vuepress',
          icon: 'mdi:vuejs',
        },
      },
    ],
  },
]

export const NOT_FOUND_ROUTE = {
  name: 'NotFound',
  path: '/:pathMatch(.*)*',
  redirect: '/404',
  isHidden: true,
}

export const EMPTY_ROUTE = {
  name: 'Empty',
  path: '/:pathMatch(.*)*',
  component: null,
}

const modules = import.meta.glob('@/router/routes/modules/*.js', { eager: true })
const asyncRoutes = []
Object.keys(modules).forEach((key) => {
  asyncRoutes.push(modules[key].default)
})
console.log('asyncRoutes', asyncRoutes)
export { asyncRoutes }
