<script setup lang="ts">
import type { Post } from 'valaxy'
import { usePostList } from 'valaxy'
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  type?: string
  posts?: Post[]
  curPage?: number
}>(), {
  curPage: 1,
})

const routes = usePostList({ type: props.type || '' })
const posts = computed(() => props.posts || routes.value)
</script>

<template>
  <div class="article-list">
    <template v-for="(post, index) in posts" :key="post.path">
      <Transition name="fade">
        <RouterLink :to="post.path || ''">
          <!-- <OceanArticleCard :post="post" :previous-post="index > 0 ? posts[index - 1] : null" /> -->
          <OceanArticleCard :post="post" :next-post="index < posts.length - 1 ? posts[index + 1] : null" />
        </RouterLink>
      </Transition>
    </template>
  </div>
</template>
