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
</style>
