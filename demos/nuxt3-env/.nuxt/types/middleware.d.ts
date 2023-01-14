import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "auth"
declare module "/home/jferreira/nura/demos/nuxt3-env/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}