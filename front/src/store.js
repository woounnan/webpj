import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	bus: new Vue(),
  	tk: undefined
  },
  mutations: {
  	setTk(){
		this.tk = localStorage.getItem('token')
  	}
  },
  actions: {

  }
})
