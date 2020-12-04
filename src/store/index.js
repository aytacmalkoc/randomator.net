import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    result: ''
  },
  getters: {
    getResult: state => {
      return state.result
    }
  },
  mutations: {
    setResult: (state, data) => {
      state.result = data
    }
  },
  actions: {
    generate: ({commit}, args) => {
      axios.post(process.env.VUE_APP_API_URL + 'generate', {
        headers: {
          'API_KEY': process.env.VUE_APP_API_KEY
        },
        args: args
      }).then(res => {
        commit('setResult', res.data)
      }).catch(err => {
        console.log(err)
      })
    }
  }
})
