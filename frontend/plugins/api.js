
const administration = {

  roles: {
    endpoint: `/api/v1/roles`,
    method: 'get',
    defaultPayload: null,
  },
  role: {
    endpoint: `/api/v1/role`,
    method: 'post',
    defaultPayload: {
      "name": null,
      "id": null,
      "visitors": null,
      "intermediate": null
    },
  },
  menus: {
    endpoint: `/api/v1/menus`,
    method: 'get',
    defaultPayload: null,
  },
  groups: {
    endpoint: `/api/v1/groups`,
    method: 'get',
    defaultPayload: null,
  },
  group: {
    endpoint: `/api/v1/group`,
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
    endpoint: `/api/v1/members`,
    method: 'get',
    defaultPayload: null,
  },
  member: {
    endpoint: `/api/v1/member`,
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
    endpoint: `/api/v1/parties`,
    method: 'get',
    defaultPayload: null,
  },

}

const session = {
  sign_in:{
    endpoint: `/api/v1/sign_in`,
    method: 'post',
    defaultPayload: null,
  },
  sign_out:{
    endpoint: `/api/v1/sign_out`,
    method: 'get',
    defaultPayload: null,
  },
}
const user = {
  profile: {
    endpoint: `/api/v1/user`,
    method: 'get',
    defaultPayload: null,
  },
  users: {
    endpoint: `/api/v1/users`,
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
