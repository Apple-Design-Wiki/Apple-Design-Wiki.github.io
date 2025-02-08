<script lang="ts" setup>
import { onBeforeRouteLeave, useRoute } from 'vue-router'
import { useAppleAppStore } from '../stores/app'

const route = useRoute()
const sakura = useAppleAppStore()

onBeforeRouteLeave(() => {
  const currentScroll = document.documentElement.scrollTop
  sakura.setScrollPosition(route.path, currentScroll)
})
</script>

<template>
  <Layout>
    <!-- <OceanusHero /> -->
    <OceanArticleList />
    <!-- <OceanusFeatureSection /> -->
    <!-- <RouterView /> -->
  </Layout>
</template>
