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
      company_division: {},
      state: '',
      room: [],
      room_num: 5,
      works: {
        toWork: [{
          to: [],
          convs: undefined,
          date: String,
        }], //요청작업
        fromWork:  [{
          to: [],
          convs: undefined,
          date: String,
        }], //받은작업
        toNotice:  [{
          to: [],
          convs: undefined,
          date: String,
        }], //보낸알림
        fromNotice: [{
          to: [],
          convs: undefined,
          date: String,
        }], //받은알림
      }, //array of convs
    },
    companys: [
    ],
    others: [
    ],
    socks:{
      sock: undefined
    },
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
    addComponents(state, k, v){
      state.components[k] = v
      console.log('verify: ', state.components[k])
    },
    initCompanys(state){
      axios.post(`http://webhacker.xyz:8000/apis/db/getCp`)
      .then(r => {
        if(Object.keys(r.data).length > 0){
          state.companys = r.data
        }
      })
      .catch(e => console.error(e))
    },
    initDivisions(state){
      state.companys.forEach((x)=>{
        if(x.name === state.user.company){
          state.user.company_division = x.division
        }
      })
    },
    initSocks(state){
      state.socks.sock = io('webhacker.xyz:8082')
    },
    initWorks(state){
      axios.post('http://webhacker.xyz:8000/apis/db/getWorks', {id: state.user.id})
        .then(r =>{
          r.data.list_works.forEach(x=>{
            x.convs.forEach(cv=>{
              console.log('cv::::', cv, '\n')
              if(cv.works.notice === true){
                //알림 목록 등록
                console.log('notiece::::', cv, '\n')
              }
              else{
                //작업 목록 등록
                console.log('works::::', cv, '\n')
              }
            })
          })
        }) 
        .catch(e=>{
          console.error('getWorks in View.vue::::', e)
        })
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
    },
    closeRoom(state, idx){
      state.user.room.splice(idx, 1)
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
    },
    getRoom(state){
      return state.user.room
    },
    getComponents(state){
      return state.components
    },
    getDivisions(state){
      return state.user.company_division
    },
    getWorks(state){
      return state.user.works
    },
  },
  actions: {

  }
})
