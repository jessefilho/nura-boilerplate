# How to use Vuetify with Nuxt 3



## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

Install Vuetify 3, sass and vite-plugin-vuetify

```bash
 npm i vuetify@next sass vite-plugin-vuetify
```

Create a plugins folder then create a file named 
```vuetify.ts``` and put it in the newly created plugins folder.

```bash
// plugins/vuetify.ts
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        components,
        directives,
    })

    nuxtApp.vueApp.use(vuetify)
})
```
```bash
// nuxt.config.ts
export default defineNuxtConfig({
    css: [
        'vuetify/lib/styles/main.sass',
        '@mdi/font/css/materialdesignicons.min.css',
    ],
    build: {
        transpile: ['vuetify'],
    },
})
```


