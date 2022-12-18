const session = {
  /**
   * Set user as log in if data are fetched
   * @param value type:boolean
   */
  set_sign_in: (value) => {
    sessionStorage.setItem('isLoggedIn', value)
  },
  isLoggedIn : () => {
    return sessionStorage.getItem('isLoggedIn')
  },
  /**
   * Object with user data
   * @param user
   */
  set : (user) => {
    sessionStorage.setItem('user', JSON.stringify(user))
  },
  /**
   * Return user
   * @param name
   * @returns {string}
   */
  user : () => {
    return JSON.parse(sessionStorage.getItem('user'))
  },
  /**
   * return refresh_token
   * @returns {any}
   */
  refresh_token : () => {
    return sessionStorage.getItem('refresh_token')
  },
  /**
   * return access_token
   * @returns {any}
   */
  access_token : () => {
    return sessionStorage.getItem('access_token')
  },
  remove : (name) => {
    sessionStorage.removeItem(name)
  },
  logout : () => {
    sessionStorage.setItem('isLoggedIn', false)
    sessionStorage.removeItem('user')
    sessionStorage.removeItem('access_token')
    sessionStorage.removeItem('refresh_token')
  },
  set_tokens : (access, refresh) => {
    sessionStorage.setItem('access_token', `Bearer ${access}`)
    sessionStorage.setItem('refresh_token', refresh)
    return true
  },
  config : () =>{
    return {
      headers: {
        'X-Refresh-Token': session.refresh_token(),
        'Authorization': session.access_token()
      },
    }
  }
}



export default defineNuxtPlugin(nuxtApp => {
  // Doing something with nuxtApp
  nuxtApp.provide("session",session)
})


