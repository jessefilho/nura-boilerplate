# How to use Vuetify with Nuxt 3

If you are building VueJS/Nuxt an application and needs a lightweight UI framework,
Vuetify is the best solution, because it is developed according Vue Philosophy. 
Components everywhere.

Vuetify is a powerful UI Component Framework built from the ground up 
to be easy to learn and rewarding to master. Our collection of UI components 
maintain a consistent style throughout your application with enough 
customization options to meet any use-case.

[What is Vuetify?](https://next.vuetifyjs.com/en/introduction/why-vuetify/)

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

Install Vuetify, sass qnd @mdi/font

```bash
 npm i vuetify@next sass @mdi/font
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

In the nuxt config file add the CSS

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

Troubleshouting:

If some goes wrong 
Try [https://next.vuetifyjs.com/en/features/treeshaking/#treeshaking](https://next.vuetifyjs.com/en/features/treeshaking/#treeshaking)
