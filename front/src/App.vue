<template>
   <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item 
          v-for="(item, i) in items"
          :key="i"
          @click="myNext(item.to.path)"
          >
          <v-list-item-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
     <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline text-uppercase">
      <v-btn
      text
      @click="$router.push('/')"
      >
        <span>ArmyTalk</span><v-icon>warning</v-icon>
      </v-btn>
      <a href="../../public/0716e5852c941f70c2d869db9d85b3f8" download="test"><v-btn @click=""> test </v-btn></a>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <div v-if="!$store.state.tk">
      <v-btn
        text
        @click="$router.push('/login')"
      >
      <span class="mr-2">로그인</span>
      <v-icon>done</v-icon>
      </v-btn>
    </div>
   <div v-else name='test'>
      <v-btn
        text
        @click="logOut"
      >
      <span class="mr-2">로그아웃</span>
      <v-icon>close</v-icon>
      </v-btn>
    </div>
  </v-app-bar>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
export default {
  name: 'App',
  data: () => ({
    drawer: null,
    items: [
        {
          icon: 'home',
          title: 'Home',
          to: {
            path: '/'
          }
        },
        {
          icon: 'assignment',
          title: 'View',
          to: {
            path: '/view'
          }
        }
    ]
  }),
  mounted(){
    this.$store.commit('initSocks')
    this.$store.commit('initCompanys')
  },
  methods: {
    myNext(path){
      if(path === '/view'){
        //this.$store.state.bus.$emit('nextView', 0)
        this.$router.push(path)
      }
    },
    logOut(){
      console.log('call logOut function')
      this.$store.commit('delToken')
      localStorage.removeItem('tk')
      location.href='/'
    },
    showSt(state){
      console.log(state)
      console.log(state.others)
    }
  }
};
</script>
