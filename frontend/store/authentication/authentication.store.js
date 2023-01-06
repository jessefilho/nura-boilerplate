//Remember: to do the modules import in store/index.js
import {defineStore} from "pinia";
import {useAlerts} from "~/store/alerts.store";

const alerts = useAlerts()
const nuxtApp =  useNuxtApp()
const post = useRequest().post
const get = useRequest().get

/**
 *
 * @type {{NamesSpace}}
 * Give a name space to the modules
 */
const namespaced = "authentication"

//State
const state = () => ({
    access_token: '',
    refresh_token: '',
    user: {},
    refreshed: false
});

// actions
const actions = {
    debug: (error) =>{
        nuxtApp.$session.logout()
        console.log('DEBUG',error)
        alerts.error('Error during the process of Sign In')
    },

    api_error(error,message){
        nuxtApp.$session.logout()
        console.log('api_error',error)
        alerts.error(message)
    },
    async get_user(){
        let url = nuxtApp.$api.user.profile
        await get(url)
            .then(response => {
                let data = response.data._rawValue
                if (data !== null){
                    this.user = data
                    nuxtApp.$session.set(this.user)
                    nuxtApp.$session.set_sign_in(true)
                    this.refreshed = false
                    alerts.success('You are logged in')
                    nuxtApp.$router.push({ path: "/products"})

                } else{
                    this.api_error(response.error,'User not found')
                }
            }).catch(error => {
                this.debug(error)
            })
    },

    async sign_in(loginForm) {
        let url = nuxtApp.$api.session.sign_in
        await post(url, loginForm)
            .then(response => {
                let data = response.data._rawValue
                if (data !== null){
                    this.access_token = data.access_token
                    this.refresh_token = data.refresh_token
                    /* Store user in local storage to keep them logged in between page refreshes */
                    nuxtApp.$session.set_tokens(this.access_token,this.access_token)
                    this.get_user()
                }else{
                    this.api_error(response.error,'Error during the process of Sign In')
                }
            }).catch(error => {
                this.debug(error)
            })
    },

    async sign_out() {


        let url = nuxtApp.$api.session.sign_out
        await get(url)
            .then(response => {
                console.log(response)
                //todo: if ok, clean client store and session
                // this.user = null
                // this.token = null
                // nuxtApp.$session.logout()
            }).catch(error => {
                this.debug(error)
            })
    }

};


// rename it to the same name of namespace
export const useAuthentication = defineStore(namespaced,{
    namespaced: true,
    state : state,
    actions : actions

})
