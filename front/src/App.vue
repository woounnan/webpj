<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>WorkTalk</span><v-icon>chat_bubble_outline</v-icon>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="/login"
        target="_blank"
      >
        <span class="mr-2" v-if="">로그인</span>
        <v-icon>done</v-icon>
      </v-btn>
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
};
</script>
