import fs from 'node:fs/promises'
import { defineLoader } from 'vitepress'

interface PageInfo {
  title: string
  subtitle: string
  content: string
  images: string[]
  href: string
}

declare const data: PageInfo[]

export { data, type PageInfo }

export default defineLoader({
  watch: ['docs/**/index.json'],
  async load(files) {
    const jsonStr = await Promise.all(files.map(f => fs.readFile(f, 'utf8')))
    return jsonStr
      .map(s => JSON.parse(s))
      .map((item, i) => ({
        ...item,
        href: new URL(
          'https://example.com/' +
            files[i].replace('docs/', '').replace('index.json', '')
        ).pathname,
      }))
  },
})
