import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import store from './store'


Vue.use(Router)



const requireAuth = (to, from, next) =>{
  if(!store.state.tk)
  //if(!localStorage.getItem('tk'))
          next('/login')
  console.log('move to next')
  console.log('token: '+store.state.tk)
  next()
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
			path: '/',
			name: 'home',
      component: () => import('./views/Chat.vue'),
      beforeEnter: requireAuth
		},
    {
      path: '/view',
      name: 'view',
      component: () => import('./views/View.vue'),
      beforeEnter: requireAuth
    },
  ]
})
