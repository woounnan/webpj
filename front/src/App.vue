<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <v-btn
        text
        @click="$router.push('/')"
        >
          <span>WorkTalk</span><v-icon>chat_bubble_outline</v-icon>
        </v-btn>
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
    
  }),
  methods: {
    logOut(){
      console.log('call logOut function')
      this.$store.commit('delToken')
      localStorage.removeItem('tk')
      location.href='/'
    }
  }
};
</script>
