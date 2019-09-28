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
        style="max-height: 600px" 
        class="overflow-y-auto" 
    >
      <v-subheader>나</v-subheader>

      <v-list-item>
        <v-list-item-avatar>
          <v-img :src="me.image"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="me.position"></v-list-item-title>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon :color="me.active ? 'deep-purple accent-4' : 'grey'">chat_bubble</v-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item
        v-for="item, idx in others"
        @click="setThis(idx)"
        v-on="on">
        <v-list-item-avatar>
          <v-img :src="item.image"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="item.position"></v-list-item-title>
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
          v-for="(item, idx) in sub"
          :key="idx"
          @click="subCall(idx)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-row>

</template>

<script>
  export default {
    components: {
    },
    data: () => {
      return {
        showMenu: false,
        sub: [
          { title: '대화하기' },
          { title: '작업 확인' },
        ],
        me: {
          position: '', 
          image: '',
          state: '',
        },
        others: [
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
        
      },
      subCall(idx){
        switch(idx){
          case 0:
            this.test1()
            break
          case 1:
            this.test2()
            break
          case 2:
            this.test3()
            break
        }
      },
      test1(){
        console.log('test1')
      },
      test2(){
        console.log('test2')
      },
      test3(){
        console.log('test3')
      },
    },
    mounted(){
      var im = this.$store.getters.getUser
      this.me.position = im.position
      this.me.state = im.state
      this.me.image = im.image
      this.others = this.$store.getters.getOthers
      console.log(this.others)
    }
  }
</script>