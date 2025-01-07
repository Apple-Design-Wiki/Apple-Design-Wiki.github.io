<template>
  <!-- This 'content' cannot be change. For more information, see https://github.com/YunYouJun/valaxy/blob/a7d24dfabb1022e20ec12bb1938fd272fd1e19e6/packages/valaxy/client/composables/outline/anchor.ts#L42 -->
  <article class="oceanus-article apple-aside mx-auto min-w-0">
    <slot />
  </article>
</template>

<style lang="scss">
@use 'valaxy/client/styles/mixins/index.scss' as *;

.oceanus-article {
  display: flex;
}
</style>
