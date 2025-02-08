<script lang="ts" setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { computed } from 'vue'

const { src } = defineProps<{
  src: string[]
  height?: string
}>()

const breakpoints = useBreakpoints(breakpointsTailwind)

const cols = computed(() => {
  if (breakpoints.xl.value)
    return 3
  if (breakpoints.lg.value)
    return 2
  return 1
})

const parts = computed(() => {
  const result = Array.from({ length: cols.value }, () => [] as typeof src)
  src.forEach((item, i) => {
    result[i % cols.value].push(item)
  })
  return result
})
</script>

<template>
  <div grid="~ cols-1 lg:cols-2 xl:cols-3 gap-2">
    <div v-for="images, idx of parts" :key="idx" flex="~ col gap-2">
      <img v-for="image, i of images" :key="i" :src="image" alt="image" :style="{ '--enter-stage': idx + 1, height }" class="slide-enter object-cover">
    </div>
  </div>
</template>
