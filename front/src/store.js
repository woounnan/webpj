import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import io from 'socket.io-client'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	bus: new Vue(),
  	tk: undefined,
    user: {
      id: '',
      pos: '',
      img: '',
      div: '',
      cp: '',
      st: ''
    },
    others: [
    ],
    socks:{
      flowSC: undefined,
      flowCS: undefined
    }
  },
  mutations: {
    delToken (state) {
    	state.tk = null
    },
    setTk(state){
      state.tk = localStorage.getItem('tk')
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
    },
    initSocks(state){
      state.socks.flowSC = io('webhacker.xyz:8082/SC')
      state.socks.flowCS = io('webhacker.xyz:8082/CS')

      /*
      state.socks.flowSC.on('msg', (data) =>{
        console.log('from server: ', data)
      })
      */
    }
  },
  getters: {
    getUser(state){
      return state.user
    },
    getOthers(state){
      return state.others
    }
  },
  actions: {

  }
})
