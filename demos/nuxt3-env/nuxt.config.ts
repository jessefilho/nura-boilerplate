// https://nuxt.com/docs/api/configuration/nuxt-config

console.log(`Running is in ${process.env.ENV} mode.` )
export default defineNuxtConfig({
    runtimeConfig: {
        // The private keys which are only available server-side
        apiSecret: process.env.SECRET,
        // Keys within public are also exposed client-side
        public: {
            apiBase: '/api',
            joke: process.env.JOKE,
        }
    }
})
