export const state = () => ({
  auth:''
})
export const mutations =  {
  setAuth: (state, payload) => {
    state.auth = payload
  }
}
export const actions = {
  async nuxtServerInit({ commit }, { req }) {
    if (req && req.session && req.session.auth) {
      commit('setAuth', req.session.auth)
    }
  }
}
