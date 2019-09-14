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
      <v-list-title v-if="!$store.state.tk">
        <v-btn
          @click="in"
        >
        <span class="mr-2">로그인</span>
        <v-icon>done</v-icon>
        </v-btn>
      </v-list-title>
     <v-list-title v-else>
        <v-btn
          @click="out"
        >
        <span class="mr-2">로그아웃</span>
        <v-icon>close</v-icon>
        </v-btn>
      </v-list-title>
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
    in(){
      console.log('call login function')
      console.log('tk:' + this.$store.state.tk)
    }
  }
};
</script>
