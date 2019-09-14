import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	bus: new Vue(),
  	tk: undefined
  },
  mutations: {
  	getToken (state) {
      state.tk = localStorage.getItem('tk')
    }
  },
  actions: {

  }
})
