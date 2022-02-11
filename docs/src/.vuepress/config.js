const {description} = require('../../package')

module.exports = {
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: "Byung's repository",
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
        ['meta', {name: 'theme-color', content: '#3eaf7c'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}]
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
                text: 'Portfolio',
                link: '/portfolio/'
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
            '/portfolio/': [
                {
                    title: '소개',
                    collapsable: true,
                    children: [
                        '',
                        'my-specialty-experience',
                        'my-specialty-tech',
                        'my-specialty-culture',
                        'my-specialty-vision',
                    ]
                },
                {
                    title: '경험 상세',
                    collapsable: true,
                    children: [
                        '1-workflow-editor',
                        '2-componentize-on-vue',
                        '3-porting-to-vue',
                        '4-auto-campaigns',
                        '5-legacy',
                    ]
                },
                {
                    title: 'Portfolio',
                    collapsable: true,
                    children: [
                        'p-api-sync-with-fe',
                        'p-how-to-import-storybook-vue',
                        'p-pwa',
                        'p-vue-component',
                    ]
                }
            ],
            '/learning/': [
                {
                    title: 'Learning',
                    collapsable: false,
                    children: [
                        '',
                        'data-structure',
                        'algorithm',
                        'design-pattern',
                        'flow-chart',
                        'http',
                        'html-css-js',
                    ]
                }
            ]
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
