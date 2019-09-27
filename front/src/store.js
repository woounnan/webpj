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
    initUser (info){
      this.state.user.id = info.id,
      this.state.user.pos = info.pos,
      this.this.state.user.div = info.div,
      this.state.user.cp = info.cp,
      this.state.user.img = info.img,
      this.state.user.st = '출근'
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
