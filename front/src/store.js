import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	bus: new Vue(),
  	tk: null
  },
  mutations: {
  	setToken (state) {
      state.tk = localStorage.getItem('tk')
    }
    delToken (state) {
    	state.tk = null
    }
  },
  actions: {

  }
})
