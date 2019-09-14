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
      <v-list>
      <v-list-tile v-if="!$store.state.tk">
        <v-btn
          text
          @click="logIn"
        >
        <span class="mr-2">로그인</span>
        <v-icon>done</v-icon>
        </v-btn>
      </v-list-tile>
     <v-list-tile v-else>
        <v-btn
          text
          @click="logOut"
        >
        <span class="mr-2">로그아웃</span>
        <v-icon>close</v-icon>
        </v-btn>
      </v-list-tile>
      </v-list>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    
  }),
  methods: {
    logIn(){
      console.log('call login function')
      console.log('tk:' + this.$store.state.tk)
    }
  }
};
</script>
