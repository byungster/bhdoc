const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Vuepress Docs Boilerplate',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    sidebarDepth: 3,
    nav: [
      {
        text: 'Summary',
        link: '/summary/'
      },
      {
        text: 'Experience',
        link: '/experience/'
      },
      {
        text: 'Learning',
        link: '/learning/'
      },
      {
        text: 'Know-how',
        link: '/know-how/'
      },
    ],
    sidebar: {
      '/summary/': [
        {
          title: 'Summary',
          collapsable: false,
          children: [
              '',
              'why-fe-developer',
          ]
        },
        {
          title: 'Experience',
          path: '/experience/'
        }
      ],
      '/experience/': [
        {
          title: 'Experience',
          collapsable: false,
          children: [
            '',
            'workflow-editor',
              'auto-campaign',
              'admin',

          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
