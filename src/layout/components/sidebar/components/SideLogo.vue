<!--
 * @Author: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @Date: 2023-10-25 11:33:42
 * @LastEditors: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @LastEditTime: 2023-10-25 17:33:04
 * @FilePath: \vue-naive-admin-main\src\layout\components\sidebar\components\SideLogo.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <router-link h-60 f-c-c to="/">
    <!-- <img src="@/assets/images/logo.png" height="42" /> -->
    <h2 v-show="!appStore.collapsed" ml-10 max-w-140 flex-shrink-0 text-16 font-bold color-primary>
      {{ title }}
    </h2>
  </router-link>
</template>

<script setup>
import { useAppStore } from '@/store'
const title = '数据驾驶舱'

const appStore = useAppStore()
</script>
