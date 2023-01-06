export const useRequest = () => {
    const nuxtApp = useNuxtApp()
    const baseURL = useRuntimeConfig().apiURL

    return {
        /**
         * POST method using useFetch
         * @param url {endpoint?:string}
         * @param payload {records}
         */
        post(url:{endpoint:string},payload:object){
            console.log(baseURL)
            return useFetch(url.endpoint,{
                method: 'POST',
                body: payload,
                baseURL: baseURL,
                headers: nuxtApp.$session.config().headers,
            })
        },
        /**
         * GET method using useFetch
         * @param url {endpoint?:string}
         */
        get(url:{endpoint:string}){
            return useFetch(url.endpoint,{
                method: 'GET',
                baseURL: baseURL,
                headers: nuxtApp.$session.config().headers,
            })
        },

    }
}
