import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/home/jferreira/nura-boilerplate/demos/nuxt3-env/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}