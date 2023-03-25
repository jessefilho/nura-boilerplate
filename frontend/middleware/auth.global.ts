export default defineNuxtRouteMiddleware((to, from) => {
    const nuxtApp =  useNuxtApp()
    const isLoggedIn = nuxtApp.$session.isLoggedIn()
    /* check if user is connected or not */
    if(!isLoggedIn){
        if (to.path === '/sign_in'){
            abortNavigation()
        }else{
            return navigateTo('/sign_in')
        }
    }else{
        /**
         * todo: update of refresh token here
         */
        // console.log('Do nothing, !isLoggedIn set up to',!isLoggedIn)

    }

})
