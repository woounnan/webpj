<template>
  
  <v-card
    max-width="500"
    class="mx-auto"
  >
    <v-toolbar
      color="indigo"
      dark
    >

      <v-toolbar-title>목록</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
    <v-list>
        <v-list-item
          v-for="item in list_user"
          :key="item.title"
          @click="on"
        >
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>

              <v-list-item-avatar>
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar>
            <v-list>
              <v-list-item
                v-for="(item, index) in items"
                :key="index"
                @click=""
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-list-item>
    </v-list>

  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          'Ganeey',
          'Morning',
          'Parari'
        ]
        list_user: [
          { icon: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
          { title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
          { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
          { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
        ],
        subView: [
          '대화하기',
          '업무확인'
        ]
      }
    },
  }
</script>

Inbox