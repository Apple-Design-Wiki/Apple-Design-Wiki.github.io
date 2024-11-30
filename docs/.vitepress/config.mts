import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Apple Design Wiki',
  description: "Recording Apple's design epic",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: 'Home', link: '/' }],

    sidebar: [],

    socialLinks: [],
  },
  appearance: false,
})
