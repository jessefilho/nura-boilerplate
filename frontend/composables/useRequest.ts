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
            return  useFetch(url.endpoint,{
                    onRequest({ request, options }) {
                        // Set the request headers
                        options.method = 'POST'
                        options.baseURL = baseURL
                        options.headers = nuxtApp.$session.config().headers || {}
                        options.body = payload
                    },
                    onRequestError({ request, options, error }) {
                        // Handle the request errors
                        // console.log('onRequestError',request, options, error)
                    },
                    onResponse({ request, response, options }) {
                        // Process the response data
                        // console.log('onResponse',request, response, options)
                        return response._data
                    },
                    onResponseError({ request, response, options }) {
                        // Handle the response errors
                        // console.log('onResponseError',request, response, options)
                        return response
                    }
                }
            )



        },
        get(url){
            return  useFetch(url.endpoint,{
                    onRequest({ request, options }) {
                        // Set the request headers
                        options.method = 'GET'
                        options.baseURL = baseURL
                        options.headers = nuxtApp.$session.config().headers || {}
                    },
                    onRequestError({ request, options, error }) {
                        // Handle the request errors
                        // console.log('onRequestError',request, options, error)
                    },
                    onResponse({ request, response, options }) {
                        // Process the response data
                        // console.log('onResponse',request, response, options)
                    },
                    onResponseError({ request, response, options }) {
                        // Handle the response errors
                        // console.log('onResponseError',request, response, options)
                    }
                }
            )

        },

    }
}
