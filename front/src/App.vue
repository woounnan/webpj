<template>
  <v-app>
 <v-navigation-drawer
                  expand-on-hover
                  permanent
                >
                  <!-- 사용자 정보 표시 ~~ 나중에 되면
                  <template v-slot:prepend>
                    <v-list>
                      <v-list-item>
                        <v-list-item-avatar>
                          <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
                        </v-list-item-avatar>
                      </v-list-item>
                      <v-list-item
                        link
                        two-line
                      >
                        <v-list-item-content>
                          <v-list-item-title class="title">Sandra Adams</v-list-item-title>
                          <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                          <v-icon>mdi-menu-down</v-icon>
                        </v-list-item-action>
                      </v-list-item>

                    </v-list>
                  </template>

                  <v-divider></v-divider>
                      -->
                  <v-list
                    nav
                    dense
                  >
                    <v-list-item link>
                      <v-list-item-icon>
                        <v-icon>mdi-folder</v-icon>
                      </v-list-item-icon>
                      <v-list-item-title>My Files</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-navigation-drawer>
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
        @click="myNext('/login')"
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
    items: [
        {
          icon: 'home',
          title: 'Home',
          to: {
            path: '/'
          }
        },
        {
          icon: 'view',
          title: 'View',
          to: {
            path: '/about'
          }
        }
    ]
  }),
  methods: {
    myNext(path){
      location.href=path
    },
    logOut(){
      console.log('call logOut function')
      this.$store.commit('delToken')
      localStorage.removeItem('tk')
      location.href='/'
    }
  }
};
</script>
