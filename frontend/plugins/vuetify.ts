// plugins/vuetify.js

import 'assets/scss/variable.scss'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { aliases,mdi } from 'vuetify/iconsets/mdi'
const theme_light = {
    dark: false,
    colors: {
        primary: '#008DDF',
        secondary: '#424242',
        accent: '#9550C7',
        error: '#af0020',
        info: '#0070b8',
        success: '#429E45',
        warning: '#E07B00',
    }
}


export default defineNuxtPlugin(nuxtApp => {

    const vuetify = createVuetify({
        treeShake: true, //  required for custom SASS variables to work
        components,
        directives,
        icons: {
            defaultSet: 'mdi', //default
            aliases,
            sets: {
                mdi,
            },
        },
        theme: {
            defaultTheme: 'theme_light',
            themes: {
                theme_light,
            }
        }
    })

    nuxtApp.vueApp.use(vuetify)
})
