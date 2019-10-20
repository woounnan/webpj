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
      <template #activator="{ on : menu }">
        <v-card
    class="mx-auto"
  >
    <v-toolbar
      color="deep-purple accent-4"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
         <v-toolbar-title>인원 보고</v-toolbar-title>

      <div class="flex-grow-1"></div>

    </v-toolbar>

    <v-list subheader
        style="max-height: 450px" 
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
                    <v-icon :color="$store.state.user.active ? 'deep-purple accent-4' : 'grey'">work</v-icon>
                  <v-icon :color="$store.state.user.active ? 'deep-purple accent-4' : 'grey'">notification_important</v-icon>
                  <v-icon :color="$store.state.user.active ? 'deep-purple accent-4' : 'grey'">chat_bubble</v-icon>
                </v-list-item-icon>
      </v-list-item>
      <v-divider></v-divider>

        <div v-for="(div) in $store.state.user.company_division">
          <v-subheader>{{div}}</v-subheader>
          <div
            v-for="(other, idx) in $store.state.others"
          >
            <div v-if="other.position != $store.state.user.position">
              <v-list-item
                v-if="other.division === div"
                @click="setThis(idx)"
                v-on="menu"
              >
                  <v-list-item-avatar>
                    <v-img :src="other.image"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title v-text="other.position"></v-list-item-title>
                  </v-list-item-content>

                  <v-list-item-icon>
                    <v-icon :color="$store.state.user.active ? 'deep-purple accent-4' : 'grey'">work</v-icon>
                  <v-icon :color="$store.state.user.active ? 'deep-purple accent-4' : 'grey'">notification_important</v-icon>
                  <v-icon :color="$store.state.user.active ? 'deep-purple accent-4' : 'grey'">chat_bubble</v-icon>
                </v-list-item-icon>
            </v-list-item>
          </div>
        </div>
        <v-divider></v-divider>
      </div>
    </v-list>
  </v-card>    
      </template>

      <v-list>
        <v-dialog v-model="dialog" scrollable max-width="300px">
        <template #activator="{ on: dialog }">
          <v-list-item
            v-for="(item, idx) in sub"
            :key="idx"
            @click="subCall(idx)"
          >
              <v-list-item-title v-on="dialog" @click="openDial">{{ item.title }}</v-list-item-title>
          </v-list-item>
        </template>
      <v-card>
        <Chat :title="cur"/>
      </v-card>
      </v-dialog>
      </v-list>
    </v-menu>

  </v-row>

</template>

<script>
  import Chat from '../../node_modules/basic-vue-chat/src/components/basic-vue-chat/BasicVueChat.vue'
  export default {
    
    components: {
      Chat,
    },
    data: () => {
      return {
        menu: null,
        dialog: null,
        showMenu: false,
        sub: [
          { title: '대화하기' },
        ],
        cur: '',
        dial: false
      }
    },
    mounted() {
      this.$store.commit('addNewMsg')
    },
    methods: {
      setThis:function(idx){
        this.cur = this.$store.getters.getOthers[idx].position
      console.log('List.vue ::: new others :::', this.$store.getters.getOthers)
      },
      openDial(){
        this.$store.state.bus.$emit('openDial')
      },
      subCall(idx){
        switch(idx){
          case 0:
            this.conversation()
            break
        }
      },
      conversation(){
        console.log('call conversation')
        this.$store.commit('addRoom', this.cur)
      },
    },
    mounted(){
    }
  }
</script>