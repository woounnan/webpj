
<template>
  <v-row justify="center">
    <v-col cols="12" sm="8">
      <v-card>
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
              ~
            </v-col>

            <v-col cols="5">

              <v-text-field 
                v-model="items.endDate"
                readonly
              />
            </v-col>
                     
            </v-row>

            </v-list-item-content>
          </v-list-item>
          <!--
          <v-divider inset></v-divider>            
          <v-list-item @click="">
            <v-list-item-action>
              <v-icon>system_update_alt</v-icon>
            </v-list-item-action>

            <v-list-item-content align="center">

          

            </v-list-item-content>
          </v-list-item>
        -->
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
        items: {}
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
