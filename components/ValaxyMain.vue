<script lang="ts" setup>
import type { PageData, Post } from 'valaxy'
import { useAppStore, useSiteConfig } from 'valaxy'
import { computed, onMounted } from 'vue'

const props = defineProps<{
  frontmatter: Post
  data?: PageData
}>()

const siteConfig = useSiteConfig()
const appStore = useAppStore()

const aside = computed(() => props.frontmatter.aside !== false)

onMounted(() => {
  if (props.frontmatter.mode === 'dark') {
    if (!appStore.isDark)
      appStore.toggleDark()
  }
})
</script>

<template>
  <main flex="~" class="oceanus-valaxy-main apple-container">
    <div>
      <div class="pt-[16px]" style="top: var(--oceanus-c-nav-height); width: var(--oceanus-c-aside-width);">
        <img :src="frontmatter.image as string || 'https://valaxy-theme-oceanus.vercel.app/assets/0311imac_20-zwr3Vp6a.png'">
      </div>
    </div>

    <slot name="main">
      <slot name="main-header" />
      <slot name="main-header-after" />

      <slot name="main-content">
        <ValaxyMd :frontmatter="frontmatter" class="min-w-0">
          <div class="max-w-none prose">
            <slot name="main-content-md" />
          </div>
          <slot />
          <slot name="main-content-after" />
        </ValaxyMd>
      </slot>

      <slot name="main-nav-before" />

      <slot name="main-nav" />

      <slot name="main-nav-after" />

      <slot v-if="siteConfig.comment.enable && frontmatter.comment !== false" name="comment" />

      <slot name="footer" />
    </slot>

    <OceanusToc v-if="aside" class="apple-toc">
      <slot name="aside-custom" />
    </OceanusToc>
  </main>
</template>

<style lang="scss" scoped>
.apple-container {
  width: 980px;
}
</style>
