// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    build: { transpile: ['yup', 'lodash', '@vee-validate/rules'] }
})
