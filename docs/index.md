---
# https://vitepress.dev/reference/default-theme-home-page

layout: home

hero:
  # name: 'Apple Design Wiki'
  # text: "Recording Apple's design epic"
---

<script setup lang="ts">
import { data } from '.vitepress/theme/wiki.data'
</script>

<div class="main">
  <a class="item" v-for="item of data" :href="item.href">
    <div class="left">
      <div class="title">{{ item.subtitle }}</div>
      <div class="content">{{ item.content }}</div>
    </div>
    <img :src="item.href + item.images[0]" :alt="item.images[0]" />
  </a>
</div>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;

  > .item {
    margin: 1em 0;
    padding: 1em 25% 1em 10%;
    display: flex;
    justify-content: space-between;

    text-decoration: none;
    color: black;

    &:hover {
      background: #f5f5f5;
    }

    > .left {
      display: flex;
      flex-direction: column;

      > .title {
        font-weight: bold;
        font-size: 1.5rem;
      }
    }

    > img {
      max-width: 300px;
    }
  }
}
</style>

<style lang="scss">
.VPHome > .vp-doc.container {
  padding: 0;
  margin: 0;
  max-width: initial;
}
</style>
