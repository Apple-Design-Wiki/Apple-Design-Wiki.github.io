<script lang="ts" setup>
import type { Post } from 'valaxy'
import { useCssVar, useEventListener, useIntersectionObserver, useThrottleFn } from '@vueuse/core'
import { useAppStore } from 'valaxy'
import { onMounted, ref } from 'vue'

const { post, nextPost } = defineProps<{
  post: Post
  previousPost?: Post
  nextPost?: Post
}>()

const appStore = useAppStore()
const navHeightVal = useCssVar('--oceanus-nav-height')

const articleCard = ref()
const articleCardIsVisible = ref(false)

useIntersectionObserver(
  articleCard,
  ([entry], _observerElement) => {
    articleCardIsVisible.value = entry?.isIntersecting || false
  },
)

function checkIfAtTop() {
  const rect = articleCard.value.getBoundingClientRect()
  const navHeight = navHeightVal?.value ? Number.parseFloat(navHeightVal.value) : 0
  const isDarkMode = post?.mode === 'dark'

  if (!articleCardIsVisible.value)
    return

  // Switch dark mode
  if (rect.top <= navHeight && isDarkMode !== appStore.isDark) {
    appStore.toggleDark()
  }

  if (!isDarkMode && nextPost?.mode === 'dark') {
    // HACK: use css var
    let backgroundColor: string

    if (navHeight >= rect.bottom)
      backgroundColor = '#000'
    else
      backgroundColor = '#fff'

    articleCard.value.style.backgroundColor = backgroundColor
  }
}

onMounted(() => {
  const throttledCheckIfAtTop = useThrottleFn(checkIfAtTop, 100)
  useEventListener(document, 'scroll', throttledCheckIfAtTop)
})
</script>

<template>
  <article ref="articleCard" class="article-card md:flex" flex="~ <md:col" :class="{ 'dark-mode': post.mode === 'dark' }">
    <div class="article-card-content" w="md:31%" h="full" z-1>
      <div class="article-card-title">
        {{ post.subtitle }}
      </div>
      <div class="article-card-excerpt">
        {{ post.content }}
      </div>
    </div>
    <div class="article-card-img" w="md:69%" h="full">
      <img v-if="post.cover" :src="post.cover[0]" :alt="post.cover[0]">
    </div>
  </article>
</template>

<style lang="scss" scoped>
.article-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 501px;
  text-decoration: none;
  color: black;
  background-color: #fff;
  transition: background-color 400ms cubic-bezier(0.4, 0, 0.25, 1);
  // margin: 1em 0;
  overflow: hidden;

  .article-card-title {
    font-size: 18px;
    font-weight: 700;
    line-height: 21.48px;
  }

  .article-card-excerpt {
    color: inherit;
    font-size: 14px;
    font-weight: 400;
    line-height: 19.09px;
    margin-top: 10px;
  }

  .article-card-content {
    padding-left: 9.3%;
    padding-top: 10vw;
    padding-bottom: 10vw;
  }

  .article-card-img {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 400ms cubic-bezier(0.4, 0, 0.25, 1);

      &:hover {
        transform: scale(1.03);
      }
    }
  }

  &.dark-mode {
    color: #fff;
    background-color: #000;
  }
}
</style>
