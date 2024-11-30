// https://vitepress.dev/guide/custom-theme

import './style.scss'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

export default <Theme>{
  extends: DefaultTheme,
  Layout: DefaultTheme.Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
  },
}
