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
         <v-toolbar-title>인원 보고</v-toolbar-title>

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
          <v-img :src="$store.state.user.image"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="$store.state.user.position"></v-list-item-title>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon :color="$store.state.user.active ? 'deep-purple accent-4' : 'grey'">chat_bubble</v-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-divider></v-divider>

        <div v-for="(div, idx) in $store.state.user.company_division">
          <v-subheader>{{div}}</v-subheader>
          <div
            v-for="(other, idx) in $store.state.others"
          >
              <v-list-item
                v-if="other.division === div"
                @click="setThis(idx)"
                v-on="on"
              >
                  <v-list-item-avatar>
                    <v-img :src="other.image"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title v-text="other.position"></v-list-item-title>
                  </v-list-item-content>

                  <v-list-item-icon>
                    <v-icon :color="other.active ? 'deep-purple accent-4' : 'grey'">chat_bubble</v-icon>
                  </v-list-item-icon>
            </v-list-item>
        </div>
        <v-divider></v-divider>
      </div>
    </v-list>
  </v-card>    
      </template>

      <v-list>
        <v-list-item
          v-for="(item, idx) in sub"
          :key="idx"
          @click="subCall(idx)"
        >
        <v-dialog v-model="dial" scrollable max-width="300px">
          <template v-slot:activator="{ on }">
            <v-list-item-title v-on="on" @click="checkComu(item.title)">{{ item.title }}</v-list-item-title>
          </template>
          <Chat :title="cur" />
        </v-dialog>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-row>

</template>

<script>
  import Chat from '../../node_modules/basic-vue-chat/src/components/basic-vue-chat/BasicVueChat.vue'
  export default {
    
    components: {
      Chat
    },
    data: () => {
      return {
        showMenu: false,
        sub: [
          { title: '대화하기' },
          { title: '상태 확인' },
        ],
        cur: '',
        dial: false
      }
    },
    methods: {
      checkComu: function(title){
        if(title === '대화하기')
          this.dial = true
      },
      setThis:function(idx){
        this.cur = this.$store.getters.getOthers[idx].position
        console.log('sethThis::', this.cur)
      },
      subCall(idx){
        switch(idx){
          case 0:
            this.conversation()
            break
          case 1:
            this.showState()
            break
        }
      },
      conversation(){
        console.log('call conversation')
        this.$store.commit('addRoom', this.cur.position)
        this.cur = undefined
      },
      showState(){
        console.log('call showState')
      },
    },
    mounted(){
    }
  }
</script>