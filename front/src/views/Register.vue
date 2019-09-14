<template>
  <v-row justify="center">
    <v-col cols="12" sm="8">
      <v-card>
        <v-card-title class="cyan darken-1">
          <span class="headline white--text">사용자 정보 등록</span>

          <div class="flex-grow-1"></div>
          <v-btn dark icon @click="sub">
            <v-icon>check</v-icon>
          </v-btn>

          <v-btn dark icon @click="closeWindow">
            <v-icon>cancel</v-icon>
          </v-btn>
        </v-card-title>

        <v-list>
          <v-list-item @click="">

            <v-list-item-action>
              <v-icon>person</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-text-field
                    v-model="v_user.name"
                    type="text"
                    placeholder="아이디 입력"
                  ></v-text-field>
            </v-list-item-content>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item @click="">
            <v-list-item-action>
              <v-icon>lock</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-text-field 
                placeholder="패스워드 입력"
                v-model="v_user.pw"
                type="password"
              ></v-text-field>
            </v-list-item-content>
          </v-list-item>


          <v-divider inset></v-divider>

          <v-list-item @click="">
            <v-list-item-action>
              <v-icon>face</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-text-field 
                placeholder="소속 검색"
                v-model="v_user.company"
                type="text"
              ></v-text-field>
              <!--show list result for searching -->
              <v-list-item v-if="v_user.state" v-for="(company) in v_companys">
                <v-list-item-content>
                  <v-list-item-title>{{company}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <!-- -->
            </v-list-item-content>
          </v-list-item>

          <v-divider inset></v-divider>            
          <v-list-item @click="">
            <v-list-item-action>
              <v-icon>mdi-map-marker</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
export default {
  props: [
    'bus'
  ],
  data () {
    return {
      v_companys : {
      },
      v_user : { 
      name : '',
      pw : '',
      state : false
      }
    }
  },
  mounted: function () {
    axios.post(`http://webhacker.xyz:8000/apis/db/getCp`)
      .then(r => {
        console.log(r.data)
        console.log(Object.keys(r.data).length)
      })
      .catch(e => console.error('@@@@@@@@@@@@@@@\n'+e))
  },
  methods : {
    sub(){
        console.log('call the sub function');
        
       this.bus.$emit('test', 1)
        this.closeWindow();
      },
      closeWindow(){
        console.log('call the closeWindow function');
        this.$emit('close')
    }
  },
  created () {
  }
}
</script>