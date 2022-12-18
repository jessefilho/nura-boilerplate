// https://nuxtjs.org/docs/configuration-glossary/configuration-plugins
// const config = useRuntimeConfig()
// const apiURL = config.apiUrl

// console.log('plug api',config)
// const apiURL = 'http://localhost:3000'
const apiURL = 'http://erm.vermon.com:3000'
const administration = {

  roles: {
    endpoint: `${apiURL}/api/v1/roles`,
    method: 'get',
    defaultPayload: null,
  },
  role: {
    endpoint: `${apiURL}/api/v1/role`,
    method: 'post',
    defaultPayload: {
      "name": null,
      "id": null,
      "visitors": null,
      "intermediate": null
    },
  },
  menus: {
    endpoint: `${apiURL}/api/v1/menus`,
    method: 'get',
    defaultPayload: null,
  },
  groups: {
    endpoint: `${apiURL}/api/v1/groups`,
    method: 'get',
    defaultPayload: null,
  },
  group: {
    endpoint: `${apiURL}/api/v1/group`,
    method: 'post',
    defaultPayload: {
      "name": null,
      "home": null,
      "location": null,
      "role_id": null,
      "menu": null,
      "description": null
    },
  },
  members: {
    endpoint: `${apiURL}/api/v1/members`,
    method: 'get',
    defaultPayload: null,
  },
  member: {
    endpoint: `${apiURL}/api/v1/member`,
    method: 'post',
    defaultPayload: [
      {
        "user_id": null,
        "group_id": null,
        "group_owner": null,
        "main": null
      }
    ],
  },
  parties: {
    endpoint: `${apiURL}/api/v1/parties`,
    method: 'get',
    defaultPayload: null,
  },

}

const session = {
  sign_in:{
    endpoint: `${apiURL}/api/v1/sign_in`,
    method: 'post',
    defaultPayload: null,
  },
  sign_out:{
    endpoint: `${apiURL}/api/v1/sign_out`,
    method: 'get',
    defaultPayload: null,
  },
}
const user = {
  profile: {
    endpoint: `${apiURL}/api/v1/user`,
    method: 'get',
    defaultPayload: null,
  },
  users: {
    endpoint: `${apiURL}/api/v1/users`,
    method: 'get',
    defaultPayload: null,
  },
}



const api = {
  // Special method to call the backend
  // call: service,
  administration: administration,
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
