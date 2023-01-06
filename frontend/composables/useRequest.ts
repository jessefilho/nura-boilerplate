export const useRequest = () => {
    const nuxtApp = useNuxtApp()
    const baseURL = useRuntimeConfig().apiURL

    return {
        /**
         * Post method using useFetch
         * @param url {endpoint?:string}
         * @param payload {records}
         */
        post(url,payload){
            return useFetch(url.endpoint,{
                method: 'POST',
                body: payload,
                baseURL: baseURL,
                headers: nuxtApp.$session.config().headers,
            })
        },
        get(url){
            return useFetch(url.endpoint,{
                method: 'GET',
                baseURL: baseURL,
                headers: nuxtApp.$session.config().headers,
            })
        },

    }
}
