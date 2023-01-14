import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/home/jferreira/nura-boilerplate/demos/nuxt3-vee-validate/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}