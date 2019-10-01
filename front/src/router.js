import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Register from './views/enroll/Register.vue'
import File from './views/File.vue'
import Chat from './views/Chat.vue'
import store from './store'


Vue.use(Router)



const requireAuth = (to, from, next) =>{
  if(!store.state.tk)
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
      path: '/work',
      name: 'work',
      component: () => import('./views/enroll/Work.vue'),
    },
    {
      path: '/file',
      name: 'file',
      component: File
    },
		{
			path: '/',
			name: 'chat',
			component: Chat,
      beforeEnter: requireAuth
		},
    {
      path: '/view',
      name: 'view',
      component: () => import('./views/View.vue')
    },
    {
      path: '/reg',
      name: 'register',
      component: Register
    },
  ]
})
