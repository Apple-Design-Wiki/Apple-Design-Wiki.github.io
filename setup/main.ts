import type { Router } from 'vue-router'
import { defineAppSetup, scrollTo, useAppStore } from 'valaxy'
import { nextTick } from 'vue'
import { useAppleAppStore } from '../stores/app'

export default defineAppSetup((ctx) => {
  const { router, isClient } = ctx

  if (!isClient)
    return

  const appStore = useAppStore()

  router.afterEach((to, _from, _next) => {
    const mode = to.meta?.frontmatter?.mode

    if (mode === 'dark' && !appStore.isDark) {
      appStore.toggleDark()
    }
    else if (mode !== 'dark' && appStore.isDark) {
      appStore.toggleDark()
    }
  })

  toScrollPosition(router)
})

export function toScrollPosition(router: Router) {
  const appleApp = useAppleAppStore()

  router.afterEach((to, from) => {
    const savedPosition = appleApp.getScrollPosition(to.path)

    if (to.fullPath !== from.fullPath && !to.hash) {
      nextTick(() => {
        setTimeout(() => {
          document.documentElement.scrollTop = savedPosition
        }, 0)
      })
    }
  })

  router.beforeEach((to, from) => {
    if (to.fullPath !== from.fullPath) {
      nextTick(() => {
        scrollTo(document.body, to.hash, {
          smooth: true,
        })
      })
    }
  })
}
