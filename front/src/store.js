import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
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
    },
    others: [
    ]
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
    },
    initOthers(state, info){
      state.others = info
    },
    setState(state, st){
      state.user.state = st
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
