import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	bus: new Vue(),
  	tk: localStorage.getItem('tk'),
    user: {
      id: '',
      pos: '',
      img: '',
      div: '',
      cp: '',
      st: ''
    }
  },
  mutations: {
    delToken (state) {
    	state.tk = null
    },
    initUser (state, info){
      state.user.id = info.id,
      state.user.pos = info.pos,
      state.user.div = info.div,
      state.user.cp = info.cp,
      state.user.img = info.img,
      state.user.st = '출근'
    }
  },
  getters: {
    getUser(state){
      return state.user
    }
  },
  actions: {

  }
})
