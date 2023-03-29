

const session = {
  sign_in:{
    endpoint: `/users/tokens/sign_in`,
    method: 'post',
    defaultPayload: null,
  },
  sign_out:{
    endpoint: `/users/tokens/revoke`,
    method: 'get',
    defaultPayload: null,
  },
}
const user = {
  profile: {
    endpoint: `/user`,
    method: 'get',
    defaultPayload: null,
  }
}



const api = {
  // Special method to call the backend
  // call: service,
  user: user,
  session: session,

}

/**
 * Inject api into the application as plugin
 */
export default defineNuxtPlugin(nuxtApp => {
  // Doing something with nuxtApp
  nuxtApp.provide("api",api)
})
