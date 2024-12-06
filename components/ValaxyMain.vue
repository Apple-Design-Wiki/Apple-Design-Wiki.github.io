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
    <div class="apple-illustration">
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
  margin-left: auto;
  margin-right: auto;

  @media only screen and (max-width: 1023px) {
    width: 692px;
  }

  @media only screen and (max-width: 735px) {
    width: 87.5%;
  }
}

.apple-illustration {
  @media only screen and (max-width: 1023px) {
    display: none;
  }
}

// HACK: apple-toc 构建的时候 class 无法挂载，先用 last-child 暂时替代
.apple-container > *:last-child,
.apple-toc {
  padding-left: 32px;

  @media screen and (min-width: 1380px) {
    margin-right: -201px;
  }

  @media only screen and (max-width: 767px) {
    display: none;
  }
}
</style>
