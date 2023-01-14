// https://nuxt.com/docs/api/configuration/nuxt-config

console.log(`Running is in ${process.env.NUXT_ENV} mode.` )
export default defineNuxtConfig({
    runtimeConfig: {
        // The private keys which are only
        // available within server-side
        apiSecret: process.env.API_SECRET,

        // Keys within public, will be also be
        // exposed to the client-side
        public: {
            env: process.env.NUXT_ENV,
            firebaseApiKey: process.env.FIREBASE_API_KEY,
        },
    },
})
