import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import store from './store'

Vue.use(Router)



const requireAuth = (to, from, next) =>{
  if(!store.state.tk)
          next('/login')
        console.log(store.state.tk)

        console.log(!store.state.tk)
        console.log(JSON.stringify(next.url))
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/reg',
      name: 'register',
      component: Register
    },
    {
      path: '/*',
      name: 'check',
      beforeEnter: requireAuth
    },
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
