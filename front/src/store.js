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
      position: '',
      image: '',
      division: '',
      company: '',
      state: '',
      room: ['default'],
      room_num: 5
    },
    others: [
    ],
    socks:{
      sock: undefined
      /*
      flowSC: undefined,
      flowCS: undefined
      */
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
      state.user.position = info.pos,
      state.user.division = info.div,
      state.user.company = info.cp,
      state.user.image = info.img,
      state.user.state = '출근'
    },
    initOthers(state, info){
      state.others = info
    },
    setState(state, st){
      state.user.state = st
    },
    initSocks(state){
      state.socks.sock = io('webhacker.xyz:8082')
      /*

      state.socks.flowSC = io('webhacker.xyz:8082/SC')
      state.socks.flowCS = io('webhacker.xyz:8082/CS')

      state.socks.flowSC.on('msg', (data) =>{
        console.log('from server: ', data)
      })
      */
    },
    addRoom(state, to){
      if(state.room.length < state.room_num){
        //add new room
        state.room.push(to)
      }
      else{
        state.room.pop()
        state.room.push(to)
      }
      console.log('add rooms : ', state.room)
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
