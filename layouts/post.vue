<script setup lang="ts">
import { useAppStore, useFrontmatter } from 'valaxy'
import { onMounted } from 'vue'

const frontmatter = useFrontmatter()
const appStore = useAppStore()

onMounted(() => {
  if (frontmatter.value.mode === 'dark') {
    if (!appStore.isDark)
      appStore.toggleDark()
  }
})
</script>

<template>
  <Layout>
    <OceanusArticle>
      <RouterView v-slot="{ Component }">
        <component :is="Component" />
      </RouterView>
    </OceanusArticle>
  </Layout>
</template>
