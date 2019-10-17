import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VModal from 'vue-js-modal'
import VueSocketIO from 'vue-socket.io'
import io from 'socket.io-client'
import axios from 'axios'


Vue.use(VModal, { dynamic: true })

Vue.config.productionTip = false


const VMenu = Vue.options.components.VMenu

Vue.component('v-menu', {
  extends: VMenu,
  
  methods: {
    getOpenDependents () {
      return []
    }
  }
})



new Vue({
  router,
  store,
  vuetify,
  io,
  data: () => ({
      drawer: null,
      tempDrawer: false,
      isMini: false,
  }),
  render: h => h(App)
}).$mount('#app')

