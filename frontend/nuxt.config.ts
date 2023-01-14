// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'
console.log(`Running in (${process.env.NODE_ENV}) mode`)
export default defineNuxtConfig({
    runtimeConfig: {
        public:{
            NODE_ENV: process.env.NODE_ENV,
            apiURL: process.env.API_URL,
        },
    },
    app: {
        head: {
            title: 'APP',
            titleTemplate: '%s | NURA',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'none', name: 'none', content: '' },
                { name: 'format-detection', content: 'telephone=no' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ]

        }
    },
    ssr: false,
    modules: [
        // replace vuex, https://pinia.vuejs.org/ssr/nuxt.html#installation
        ['@pinia/nuxt',{
            autoImports: [
                // automatically imports `defineStore`
                'defineStore', // import { defineStore } from 'pinia'
                // automatically imports `defineStore` as `definePiniaStore`
                ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
            ],
        }],
        // Inline module definition
        async (options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(
                vuetify()
            ))
        }

    ],
    css: [
        'vuetify/lib/styles/main.sass',
        '@mdi/font/css/materialdesignicons.min.css',
    ],

    build: {
        transpile: [
            'vuetify',
            'vee-validate',
            '@vee-validate/rules'
        ]
    },
    vite: {
        define: {
            'process.env.DEBUG': true,
        },
    },
    imports: {
        // Auto-import pinia stores defined in `~/stores`
        dirs: ['./stores'],
        autoImport: true
    },
})
