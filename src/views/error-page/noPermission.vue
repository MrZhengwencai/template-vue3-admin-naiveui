<!--
 * @Author: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @Date: 2023-10-26 10:53:01
 * @LastEditors: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @LastEditTime: 2023-10-26 11:20:39
 * @FilePath: \vue-naive-admin-main\src\views\error-page\noPermission.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="mt-200 flex justify-center">
    <n-result title="主人,系统又出问题了" :description="msg">
      <template #footer>
        <n-button type="warning" @click="goHome">散财消灾</n-button>
      </template>
    </n-result>
  </div>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const msg = route.query.msg
const goHome = () => {
  router.push({
    path: '/',
  })
}
console.log('code---', msg)
</script>
