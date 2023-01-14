import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "private"
declare module "/home/jferreira/nura/frontend/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}