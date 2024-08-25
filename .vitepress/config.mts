import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Devrules",
  description: "Development Rules",
  themeConfig: {
    logo: '/assets/images/lunorix/icon.png',
    search: {
      provider: 'local'
    },
    sidebar: [
      { text: 'Home', link: '/' },
      {
        text: 'Rules',
        items: [
          { text: 'Style Guides', link: '/style-guides' },
          { text: 'Commit Message', link: '/commit-message' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lunorix/devrules' }
    ],
  }
})
