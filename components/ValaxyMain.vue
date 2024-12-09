<script lang="ts" setup>
import type { PageData, Post } from 'valaxy'
import { useSiteConfig } from 'valaxy'
import { computed } from 'vue'

const props = defineProps<{
  frontmatter: Post
  data?: PageData
}>()

const siteConfig = useSiteConfig()

const aside = computed(() => props.frontmatter.aside !== false)
</script>

<template>
  <main flex="~" class="oceanus-valaxy-main apple-container">
    <div class="apple-illustration">
      <!-- mt-70 + mb-150 + line-height-40 -->
      <div class="pt-[260px]" style="top: var(--oceanus-c-nav-height); width: var(--aside-width-left);">
        <img :src="frontmatter.illustration as string || ''">
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
  width: 1180px;
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
  padding-top: 260px;
  padding-left: 32px;

  @media screen and (min-width: 1380px) {
    margin-right: -201px;
  }

  @media only screen and (max-width: 767px) {
    display: none;
  }
}
</style>
