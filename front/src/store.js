import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import io from 'socket.io-client'
Vue.use(Vuex)
var list_keys = []
var regWork = (works, cv, to) => {
  if(list_keys.indexOf(cv.date) == -1){
    //여기서 등록이란건 변수에 저장을 했다는 의미(관리를 위해)
    //해당 작업은 등록되지 않았으므로 등록처리
    console.log('######처음등록')
    works.push({
      convs : cv,
      to : [to], //대상,, 보낸: 받은사람 / 받은: 보낸사람
      date : cv.date 
    })
    list_keys.push(cv.date)
  }else{
    //이미 등록이 되어있다
    //대상만 추가해준다.
    for(x in works){
      if(works[x].date === cv.date){
        works[x].to.push(to)
        console.log('already registered work')
        return
      }
    }
  }
}

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
        list_keys : [], //date를 push해서 등록되잇는 work를 확인
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
              if(cv.works.notice === true){
                if(cv.id === state.user.id){
                  //보낸알림 등록
                }else{
                  //받은알림 등록

                }

              }
              else{
                if(cv.id === state.user.id){
                  console.log('!!!!!!!!!!!!!!!!!')
                  regWork(state.user.works.toWork, cv, x.with)
                  //요청작업 등록
                }else{
                  //받은작업 등록
                  console.log('@@@@@@@@@@@@@')
                  regWork(state.user.works.fromWork, cv, x.with)

                }

              }
            })


            console.log('잘 등록되었나?::::', state.user.works)
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
