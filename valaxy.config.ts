import type { ThemeConfig } from 'valaxy-theme-oceanus'
import { defineConfig } from 'valaxy'

export default defineConfig<ThemeConfig>({
  theme: 'oceanus',

  themeConfig: {
    outline: [2, 3],

    logo: {
      light: '/WebNavLogoDark.svg',
      dark: '/WebNavLogoWhite.svg',
    },

    navTitle: false,
    navTools: [['search']],

    hero: {
      title: 'Apple Design Wiki',
      motto: '简约、高雅的 Valaxy 文档主题',
      img: 'https://w.wallhaven.cc/full/85/wallhaven-85yl61.png',
    },

    footer: {
      since: 2024,
    },
  },
})
