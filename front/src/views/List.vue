<template>
  <v-row
    class="d-flex"
    justify="center"
  >
    <v-menu
      v-model="showMenu"
      absolute
      offset-y
    >
      <template v-slot:activator="{ on }">
        <v-card
    class="mx-auto"
  >
    <v-toolbar
      color="deep-purple accent-4"
      dark
      src="https://picsum.photos/1920/1080?random"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
         <v-toolbar-title>New Chat</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>

    <v-list subheader
        style="max-height: 540px"  
        class="scroll-y"
    >
      <v-subheader>나</v-subheader>

      <v-list-item>
        <v-list-item-img>
          <v-img :src="me.img"></v-img>
        </v-list-item-img>

        <v-list-item-content>
          <v-list-item-title v-text="me.pos"></v-list-item-title>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon :color="me.active ? 'deep-purple accent-4' : 'grey'">chat_bubble</v-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item
        v-for="item, idx in users"
        @click="setThis(idx)"
        v-on="on">
        <v-list-item-img>
          <v-img :src="item.img"></v-img>
        </v-list-item-img>

        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon :color="item.active ? 'deep-purple accent-4' : 'grey'">chat_bubble</v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
  </v-card>    
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in sub"
          :key="index"
          @click=""
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-row>

</template>

<script>
import Users from './Users.vue'
  export default {
    components: {
      Users
    },
    data: () => {
      return {
        showMenu: false,
        sub: [
          { title: '대화하기' },
          { title: '작업 확인' },
        ],
        me: {
          pos: '', 
          img: '',
          st: '',
        },
        users: [
        /*
          { active: true, title: 'Jason Oner', img: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
        */
        ],
        items2: [
          { title: 'Travis Howard', img: 'https://cdn.vuetifyjs.com/images/lists/5.jpg' },
        ],
      }
    },
    methods: {
      setThis:function(idx){
        console.log('bef -- title: ' + this.users[idx].title)
        this.users[idx].title="바뀌었을까요"

        console.log('af -- title: ' + this.users[idx].title)
      }
    },
    mounted(){
      var im = this.$store.getters.getUser
      console.log('Listvue:: ',im)
      this.me.pos = im.pos
      this.me.st = im.st
      this.me.img = im.img
      console.log('Listvue:: ', this.me)
    }
  }
</script>