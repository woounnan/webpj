import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VModal from 'vue-js-modal'
import './plugins/socketPlugin'
import Directives from './plugins/directives';
Vue.use(Directives);

Vue.use(VModal, { dynamic: true })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
