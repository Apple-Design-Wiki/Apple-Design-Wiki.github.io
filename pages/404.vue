<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  router.push({ name: window.location.pathname })
})
</script>

<template>
  <div>
    <p>Routing based on URL query parameter...</p>
  </div>
</template>
