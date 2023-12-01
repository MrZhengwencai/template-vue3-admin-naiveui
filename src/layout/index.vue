<template>
  <n-layout has-sider wh-full>
    <n-layout-sider
      v-if="!isQiankun"
      bordered
      collapse-mode="width"
      :collapsed-width="64"
      :width="220"
      :native-scrollbar="false"
      :collapsed="appStore.collapsed"
    >
      <SideBar />
    </n-layout-sider>

    <article flex-col flex-1 overflow-hidden>
      <header
        v-if="!isQiankun"
        border-b="1 solid #eee"
        class="flex items-center bg-white px-15"
        :style="`height: ${header.height}px`"
      >
        <AppHeader />
      </header>
      <section v-if="tags.visible && !isQiankun" hidden border-b bc-eee sm:block dark:border-0>
        <AppTags :style="{ height: `${tags.height}px` }" />
      </section>
      <section flex-1 overflow-hidden bg-hex-f5f6fb>
        <AppMain />
      </section>
    </article>
  </n-layout>
</template>

<script setup>
import AppHeader from './components/header/index.vue'
import SideBar from './components/sidebar/index.vue'
import AppMain from './components/AppMain.vue'
import AppTags from './components/tags/index.vue'
import { useAppStore } from '@/store'
import { header, tags } from '~/settings'
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
import { computed } from 'vue'
const appStore = useAppStore()
const isQiankun = computed(() => {
  return qiankunWindow.__POWERED_BY_QIANKUN__
})
</script>
