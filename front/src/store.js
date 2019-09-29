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
      company_info: {},
      state: '',
      room: [],
      room_num: 4
    },
    companys: [
    ],
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
      state.user.position = info.position,
      state.user.division = info.division,
      state.user.company = info.company,
      state.user.image = info.image,
      state.user.state = '출근'
    },
    initOthers(state, info){
      state.others = info
    },
    setState(state, st){
      state.user.state = st
    },
    initCompanys(state){
      axios.post(`http://webhacker.xyz:8000/apis/db/getCp`)
      .then(r => {
        if(Object.keys(r.data).length > 0){
          console.log('r.data:::',r.data)
          state.companys = r.data
          state.companys.forEach((x)=>{
            console.log('for-----:::',x)
            if(x.name === state.user.company){
              console.log('tru::::', x.name)
              state.user.company_info = x
            }
          })
        }
      })
      .catch(e => console.error(e))
      console.log('store.js -----------')
      console.log(state.companys)
      console.log(state.user.company_info)
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
      if(state.user.room.indexOf(to) != -1) return 
      if(state.user.room.length < state.user.room_num){
        //add new room
        state.user.room.push(to)
      }
      else{
        state.user.room.pop()
        state.user.room.push(to)
      }
      console.log('add rooms : ', state.user.room)
    }
  },
  getters: {
    getUser(state){
      return state.user
    },
    getOthers(state){
      return state.others
    },
    getCompanys(state){
      return state.companys
    }
  },
  actions: {

  }
})
