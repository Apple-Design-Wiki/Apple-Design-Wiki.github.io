<script lang="ts" setup>
import { breakpointsTailwind, isClient, useBreakpoints } from '@vueuse/core'
import mediumZoom from 'medium-zoom'
import { computed, ref, watchEffect } from 'vue'

const props = withDefaults(defineProps<{
  src: string[] | string
  mode?: 'flex' | 'grid'
  height?: string
  minHeight?: string
  maxHeight?: string
}>(), {
  mode: 'grid',
})

const imageSizes = ref<{ src: string, width: number, height: number }[]>([])

const breakpoints = useBreakpoints(breakpointsTailwind)

const images = computed(() => typeof props.src === 'string' ? [props.src] : props.src)
const heightNum = computed(() => Number.parseInt(props.height || '0', 10))
const minHeight = computed(() => props.minHeight || props.height)

const cols = computed(() => {
  if (breakpoints.xl.value)
    return 3
  if (breakpoints.lg.value)
    return 2
  return 1
})

const parts = computed(() => {
  const result = Array.from({ length: cols.value }, () => [] as typeof images.value)
  images.value.forEach((item, i) => {
    result[i % cols.value].push(item)
  })
  return result
})

function getImageSize(url: string): Promise<{ width: number, height: number }> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve({ width: img.width, height: img.height })
    img.onerror = reject
    img.src = url
  })
}

watchEffect(async () => {
  if (!isClient)
    return

  const sizes = await Promise.all(
    images.value.map(async (item) => {
      try {
        const size = await getImageSize(item)
        const aspectRatio = size.width / size.height
        const adjustedWidth = Math.floor(heightNum.value * aspectRatio)
        const adjustedHeight = heightNum.value

        return { src: item, width: adjustedWidth, height: adjustedHeight }
      }
      catch {
        return { src: item, width: 0, height: 0 }
      }
    }),
  )
  imageSizes.value = sizes

  // NOTE: Since images may not be immediately available after DOM rendering, a network request is necessary to fetch and parse them.
  // The `medium-zoom` component should be reinitialized after the request finishes and all operations are completed.
  setTimeout(() => {
    mediumZoom(document.querySelectorAll('.flex-gallery img'))
  }, 0)
})
</script>

<template>
  <section v-if="mode === 'flex'" class="gallery flex-gallery" :style="{ '--min-height': minHeight, '--max-height': maxHeight }">
    <article v-for="imgSize, idx of imageSizes" :key="idx" class="gallery-item slide-enter" :style="{ '--enter-stage': idx + 1, '--width': imgSize.width, '--height': imgSize.height }">
      <picture>
        <img alt="Image" loading="lazy" decoding="async" w="full" h="full" :src="imgSize.src" :width="imgSize.width" :height="imgSize.height" class="absolute object-cover">
      </picture>
      <!-- TODO: expandable -->
      <!-- <details open>
          <summary>info</summary>
          <p>
            date?
          </p>
        </details> -->
    </article>
  </section>

  <section v-else-if="mode === 'grid'" class="gallery grid-gallery" grid="~ cols-1 lg:cols-2 xl:cols-3" style="gap: var(--gap);" :style="{ '--min-height': minHeight, '--max-height': maxHeight }">
    <article v-for="images, idx of parts" :key="idx" flex="~ col" style="gap: var(--gap);">
      <img v-for="image, i of images" :key="i" w="full" h="auto" :src="image" alt="image" :style="{ '--enter-stage': idx + 1 }" class="slide-enter gallery-item">
      <!-- TODO: expandable -->
      <!-- <details open>
          <summary>info</summary>
          <p>
            date?
          </p>
        </details> -->
    </article>
  </section>
</template>

<style lang="scss" scoped>
/* variables */
.gallery {
  --gap: 1rem;
  --min-height: 10rem;
  --image-background: hsla(0, 0%, 0%, 0.2);
  --last-background: none;
}

.gallery {
  &:hover .gallery-item {
    opacity: 0.6;
  }

  .gallery-item {
    border-radius: var(--radius);
    background-color: var(--image-background);
    max-height: var(--max-height, none);

    // NOTE: #47
    // box-shadow:
    //   0 0.125rem 0.25rem rgb(0 0 0 / 14%),
    //   0 0 0.125rem rgb(0 0 0 / 12%);

    transition: opacity 500ms linear !important;

    &:hover {
      opacity: 1;
      // NOTE: #47
      // box-shadow:
      //   0 0.25rem 0.25rem rgb(0 0 0 / 14%),
      //   0 0 0.25rem rgb(0 0 0 / 12%);

      &::after {
        opacity: 1;
      }

      picture + details {
        opacity: 1;
      }
    }

    // &::after {
    //   content: ' ';
    //   position: absolute;
    //   opacity: 0;
    //   top: 0;
    //   right: 0;
    //   bottom: 0;
    //   left: 0;
    //   background: linear-gradient(rgba(0, 0, 0, 0) 0% 80%, rgba(0, 0, 0, 0.501961) 98% 100%);
    //   transition: opacity 250ms linear;
    //   z-index: 1;
    // }

    picture + details {
      opacity: 0;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      color: #fff;
      text-shadow: 0 0 2px #000;
      padding: 1em;
      text-align: left;
      transition: opacity 250ms linear;
      z-index: 2;

      & > summary {
        border: none;
        list-style: none;
      }
    }
  }
}

.flex-gallery {
  display: flex;
  flex-wrap: wrap;
  grid-gap: var(--gap);
  margin: 2.75rem;

  > .gallery-item {
    flex-grow: calc(var(--width) * (100000 / var(--height)));
    flex-basis: calc(var(--min-height) * (var(--width) / var(--height)));
    aspect-ratio: var(--width) / var(--height);
    position: relative;
    overflow: hidden;
  }

  &:after {
    content: ' ';
    flex-grow: 1000000000;
    background: var(--last-background);
  }
}

.grid-gallery {
  .gallery-item {
    min-height: var(--min-height, none);
    max-height: var(--max-height, none);
  }
}
</style>
