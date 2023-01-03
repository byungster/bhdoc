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
                text: 'Detail',
                link: '/portfolio/'
            },
            {
                text: 'References',
                link: '/learning/'
            },
        ],
        sidebar: {
            '/portfolio/': [
                {
                    title: 'Byung’s Detail',
                    collapsable: true,
                    children: [
                        '',
                    ]
                },
                {
                    title: 'Byung’s Experiences',
                    collapsable: true,
                    children: [
                        'experience/NOTE',
                        'experience/1-workflow-editor',
                        'experience/2-componentize-on-vue',
                        'experience/3-porting-to-vue',
                        'experience/4-auto-campaigns',
                        'experience/5-legacy',
                    ]
                },
                {
                    title: 'Byung’s References',
                    link: '/learning/'
                },
                // {
                //     title: 'Portfolio',
                //     collapsable: true,
                //     children: [
                //         'detail/p-api-sync-with-fe',
                //         'detail/p-how-to-import-storybook-vue',
                //         'detail/p-pwa',
                //         'detail/p-vue-component',
                //     ]
                // }
            ],
            '/learning/': [
                {
                    title: 'Byung’s References',
                    collapsable: true,
                    children: [
                        '',
                        'html-css-javascript',
                        'browser',
                        'vue',
                        'cs',
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
        '@vuepress/active-header-links',
        {
            sidebarLinkSelector: '.sidebar-link',
            headerAnchorSelector: '.header-anchor'
        }
    ]
}
