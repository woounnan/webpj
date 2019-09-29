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
  mounted:{
    console.log('store.js mounted :::')
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
    initCompanys(state){
      axios.post(`http://webhacker.xyz:8000/apis/db/getCp`)
      .then(r => {
        if(Object.keys(r.data).length > 0){
          this.v_companys = r.data
          this.$store.commit('initCompanys', r.data)
        }
      })
      .catch(e => console.error(e))
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
    }
  },
  actions: {

  }
})
