import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import io from 'socket.io-client'
Vue.use(Vuex)
var getAvatar = function(state, position){
  var ret = undefined
  state.others.forEach(x => {
    if(x.position === position){
      ret = x.image
      return
    }
  })
  return ret
}


var getDiff = function(startDate, endDate) {
    var diff_start = startDate instanceof Date ? startDate :new Date(startDate)
    var diff_end = endDate instanceof Date ? endDate :new Date(endDate)
 
    diff_start = new Date(diff_start.getFullYear(), diff_start.getMonth()+1, diff_start.getDate())
    diff_end = new Date(diff_end.getFullYear(), diff_end.getMonth()+1, diff_end.getDate())
 
    var diff = Math.abs(diff_end.getTime() - diff_start.getTime())
    diff = Math.ceil(diff / (1000 * 3600 * 24))
 
    return diff;
}


var regWork = (state, works, cv, to) => {
  if(state.user.works.list_keys.indexOf(cv.date) == -1){
    //여기서 등록이란건 변수에 저장을 했다는 의미(관리를 위해)
    //해당 작업은 등록되지 않았으므로 등록처리
    var diff = getDiff((new Date().toISOString().substr(0, 10)), cv.works.endDate)

    works.push({
      convs : cv,
      to : [{
        position: to,
        file_save: cv.works.file_c_save,
        file_real: cv.works.file_c_real,
        state: cv.works.state_c, //각 클라이언트 state
        avatar: getAvatar(state, to),
        flag_upload : cv.works.flag_c_upload,
        flag_sendDate : cv.works.flag_sendDate,  //새로추가
        comment: cv.works.comment,
      }], 
      due : '- ' + String(diff) + ' days',
    })
    state.user.works.list_keys.push(cv.date)
  }else{
    //이미 등록이 되어있다
    //대상만 추가해준다.
    works.forEach(x =>{
      if(x.date === cv.date){
        x.to.push({
        position: to,
        file_save: cv.works.file_c_save,
        file_real: cv.works.file_c_real,
        state: cv.works.state_c, //각 클라이언트 state
        avatar: getAvatar(state, to),
        flag_upload : cv.works.flag_c_upload,
        flag_sendDate : cv.works.flag_sendDate, //새로추가  보낸시간
      })
        console.log('already registered work')
        return
      }
    })
  }
}

export default new Vuex.Store({
  state: {
  	bus: new Vue(),
  	tk: undefined,
    today: '',
    mountedCheck: [],
    idxView: undefined,
    p_work: {
      idxWork: undefined,
      idxSep: undefined,
      idxSepKey: undefined,
    },
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
        schemaWork: [{
          to: [{
            position: String,
            file_save: String,
            file_real: String,
            avatar: String,
            state: String,
            flag_upload : Boolean,
          }],
          convs: undefined,
          date: String, //primary key
          title: String, 
          contents: String,
          favor: Boolean,
          file_save: String,
          file_real: String,
        }], 
        toWork: [], //요청작업
        fromWork:  [], //받은작업
        toNotice:  [], //보낸알림
        fromNotice: [], //받은알림
        flag_upload : Boolean,
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
    setToday(state){
      state.today = new Date().toISOString().substr(0, 10)

      console.log('setToday::::', state.today)
    },
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
      state.user.idmage = info.image,
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
      state.user.works = {
        list_keys : [],
        toWork: [], //요청작업
        fromWork:  [], //받은작업
        toNotice:  [], //보낸알림
        fromNotice: [], //받은알림
      }
        console.log('call initWorks :::')

      axios.post('http://webhacker.xyz:8000/apis/db/getWorks', {id: state.user.id})
        .then(r =>{
          r.data.list_works.forEach(x=>{
            x.convs.forEach(cv=>{
              if(cv.date != cv.works.flag_date){
                return
              }
              if(cv.works.notice === true){
                if(cv.works.by === state.user.id){
                  //보낸알림 등록
                  regWork(state, state.user.works.toNotice, cv, x.with)
                  //state.user.works.toNotice.splice(0, 1)
                }else{
                  //받은알림 등록
                  regWork(state, state.user.works.fromNotice, cv, x.with)
                  //state.user.works.fromNotice.splice(0, 1)
                }

              }
              else{
                if(cv.works.by === state.user.id){
                  //요청작업 등록
                  regWork(state, state.user.works.toWork, cv, x.with)
                  //state.user.works.toWork.splice(0, 1)
                }else{
                  //받은작업 등록
                  regWork(state, state.user.works.fromWork, cv, x.with)
                  //state.user.works.fromWork.splice(0, 1)

                }

              }
            })

          })
          state.user.works.toWork.forEach(x=>{
            var count = 0
            console.log('check routine ::: store.js :::')
            x.to.forEach(y => {
              if(y.state != x.convs.works.state_s){
                count++
              }
            })
            if(count == x.to.length){
              console.log('서버 상태 업데이트 시키께 ::: store.js :::', x.convs.works.title)
              x.convs.works.state_s = x.convs.works.state_c
              x.convs.works.flag_sender = 'checkPage'
              state.bus.$emit('sendWork', x)
            }
          })
        }) 
        .catch(e=>{
          console.error('getWorks in View.vue::::', e)
        })
    },
    find_work(state, convs){
      if(convs.works.notice === true){
        if(convs.works.by === state.user.id){
          //보낸알림 등록
          state.p_work.idxSep = 2
          state.p_work.idxSepKey = 'toNotice'
        }else{
          //받은알림 등록
          state.p_work.idxSep = 3
          state.p_work.idxSepKey = 'fromNotice'
        }

      }
      else{
        if(convs.works.by === state.user.id){
          //요청작업 등록
          state.p_work.idxSep = 0
          state.p_work.idxSepKey = 'toWork'
        }else{
          //받은작업 등록
          state.p_work.idxSep = 1
          state.p_work.idxSepKey = 'fromWork'
        }
      }
      var jobs = state.user.works[state.p_work.idxSepKey]
      console.log('find jobs ::: find_work ::: store.js :::', jobs)

      var i = 0
      var ret = 0
      jobs.convs.forEach(x=>{
        if(ret == 1)
          return
        if(x.works.flag_date === convs.works.flag_date){
          state.p_work.idxWork = i
          console.log('find works ::: find_work ::: store.js :::', jobs[state.p_work.idxWork])
          ret = 1
        }
        i++
      })
    },
    init_idxWork(state, idx_work){
      state.p_work.idxWork = idx_work
    }, 
    init_idxSepKey(state, idx_sep){
      console.log('call init_idxSepkey :::', idx_sep)
      switch(idx_sep){
        case 0:
          state.p_work.idxSepKey = 'toWork'
          break
        case 1:
          state.p_work.idxSepKey = 'fromWork'
          break
        case 2:
          state.p_work.idxSepKey = 'toNotice'
          break
        case 3:
          state.p_work.idxSepKey = 'fromNotice'
          break
      }
    }, 
    initIdxView(state, idx){
      state.idxView = idx
      this.commit('initWorks')
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
    },
    closeRoom(state, idx){
      state.user.room.splice(idx, 1)
    },
    pushMountedCheck(state, eve){
      state.mountedCheck.push(eve)
    },
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
    getMountedCheck(state){
      return state.mountedCheck
    },
    getIdxView(state){
      return state.idxView
    },
    getToday(state){
      return state.today
    },
  },
  actions: {

  }
})
