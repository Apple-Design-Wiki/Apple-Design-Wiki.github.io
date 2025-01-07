import { defineAppSetup, useAppStore } from 'valaxy'

export default defineAppSetup((ctx) => {
  const { router, isClient } = ctx

  if (!isClient)
    return

  const appStore = useAppStore()

  router.afterEach((to, _from, _next) => {
    const frontmatter = to.meta?.frontmatter?.value
    const mode = frontmatter?.mode

    if (mode === 'dark' && !appStore.isDark) {
      appStore.toggleDark()
    }
    else if (mode !== 'dark' && appStore.isDark) {
      appStore.toggleDark()
    }
  })
})
