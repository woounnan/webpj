import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	bus: new Vue(),
  	tk: localStorage.getItem('tk'),
    test: 'test!!'
  },
  mutations: {
    delToken (state) {
    	state.tk = null
    }
  },
  actions: {

  }
})
