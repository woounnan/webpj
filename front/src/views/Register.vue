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
                v-model="v_user.cp"
                type="text"
                v-on:keyup="searchCp"
              ></v-text-field>
            </v-list-item-content>
          </v-list-item>
             <!--show list result for searching -->
        <v-list-item v-if="v_searchCp.state" v-for="(cp) in v_searchCp.cps">
          <v-list-item-action>
            <v-icon>search</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-bind:style="{color: 'gray'}">{{cp.name}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- -->
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
      v_companys : {},
      v_searchCp : {
        cps: [],
        state: false
      },
      v_user : { 
      name : '',
      pw : '',
      cp : []
      }
    }
  },
  mounted: function () {
    axios.post(`http://webhacker.xyz:8000/apis/db/getCp`)
      .then(r => {
        if(Object.keys(r.data).length > 0){
          this.v_companys = r.data
        }
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
    },
    searchCp(){
      v_searchCp.cps = []
      console.log('call SearchCp')
      var len = Object.keys(this.v_companys).length
      for(var i=0; i<len; i++){
        console.log('sources: '+this.v_companys[i].name )
        console.log('target: '+this.v_user.cp)
        if(this.v_companys[i].name.includes(this.v_user.cp)){
          this.v_searchCp.cps.push(this.v_companys[i])
          this.v_searchCp.state = true
          console.log('Yeah... I\'d founded!')
        }
      }
    }
  },
  created () {
  }
}
</script>