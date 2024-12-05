<script setup lang="ts">
import { useFrontmatter } from 'valaxy'
import { computed } from 'vue'

const frontmatter = useFrontmatter()

const aside = computed(() => frontmatter.value.aside !== false)
</script>

<template>
  <article class="oceanus-article mx-auto min-w-0">
    <slot />
  </article>
</template>

<style lang="scss">
@use 'valaxy/client/styles/mixins/index.scss' as *;

.oceanus-article {
  display: flex;
}

.apple-toc {
  padding-left: 32px;

  @media screen and (min-width: 1380px) {
    margin-right: -201px;
  }
}
</style>
