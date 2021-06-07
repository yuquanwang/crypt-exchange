import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token'),
    csrfHeader: localStorage.getItem('csrfHeader')
  },
  getters: {},
  mutations: {
    setToken(state, token) {
      state.token = token
      if (!token) {
        localStorage.removeItem('token', token)
      } else {
        localStorage.setItem('token', token)
      }
    },
    setUser(state, user) {
      state.user = user
      if (!user) {
        localStorage.removeItem('user', user)
      } else {
        localStorage.setItem('user', user)
      }
    }
  },
  actions: {
    storeToken({ commit }, token) {
      commit('setToken', token)
    },
    storeUser({ commit }, user) {
      commit('setUser', user == '' ? '' : JSON.stringify(user))
    }
  },
  modules: {}
})
