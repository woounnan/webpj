
<template>
  <v-row >
    <v-col cols="12" sm="8">
      <v-card max-width="500px">
        <v-card-title class="cyan darken-1">

            <span class="headline white--text">상세 보기</span>


          
          <div class="flex-grow-1"></div>
          <v-btn depressed large color="error">미제출</v-btn>
          <v-btn depressed large color="primary">승인대기</v-btn>
          <v-btn depressed large color="orange darken-3 white--text">승인거절</v-btn>
          <v-btn depressed large color="green darken-1 white--text">승인완료</v-btn>
          <v-btn dark icon @click="closeWindow">
            <v-icon>cancel</v-icon>
          </v-btn>
        </v-card-title>

        <v-list>
          <v-list-item @click="">
            <v-list-item-action>
              <v-icon>title</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-text-field 
                readonly
                v-model="works.title"
                type="text"
              ></v-text-field>
            </v-list-item-content>
          </v-list-item>
          <v-divider inset></v-divider>            
          <v-list-item @click="">
            <v-list-item-action>
              <v-icon>text_fields</v-icon>
            </v-list-item-action>

            <v-list-item-content>
                <v-textarea 
                v-model="works.contents"
                counter
                full-width
                single-line
                type="text"
                readonly
              />
            </v-list-item-content>
          </v-list-item>
          <v-divider inset></v-divider>            
          <v-list-item @click="">
            <v-list-item-action>
              <v-icon>date_range</v-icon>
            </v-list-item-action>

            
              
            <v-list-item-content>
              <v-row >
                <v-col cols="5">
                <v-text-field 
                v-model="items.startDate"
                readonly
              />
            </v-col>
            <v-col cols="2">
            <v-list-item-action>
              <v-icon>system_update_alt</v-icon>
            </v-list-item-action>
          </v-col>
            <v-col cols="5">
                <v-text-field 
                v-model="items.startDate"
                readonly
              />
            </v-col>
            </v-row>

            </v-list-item-content>  
            </v-list-item>    
        </v-list>
        <v-list three-line
                  class="overflow-y-auto"  
          style="max-height: 200px" 
        >
      <template v-for="(item, index) in items">
        <v-subheader
          v-if="item.header"
          :key="item.header"
          v-text="item.header"
        ></v-subheader>

        <v-divider
          v-else-if="item.divider"
          :key="index"
          :inset="item.inset"
        ></v-divider>

        <v-list-item
          v-else
          :key="item.title"
          @click=""
        >
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>      
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
  import ViewParts from './ViewParts.vue'
  import axios from 'axios'
  export default{
    components:{
      ViewParts,
    },
    props:{
      works: undefined
    },
    data(){
      return {
        items: {},
        items: [
        { header: '대상' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?",
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
        },
      ],
      }
    },
    mounted(){
      console.log('ViewWork.vue::::', this.works)
    },
    methods: {
      closeWindow(){
        console.log('call closeWindow in ViewWork.vue::::')
        this.$store.state.bus.$emit('closeViewWork')
      }
    },
  }
</script>
