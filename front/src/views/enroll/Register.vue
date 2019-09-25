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
              <v-icon>face</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-text-field
                    v-model="v_user.id"
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
              <v-icon>mdi-map-marker</v-icon>
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
        <v-list-item @click="" v-if="v_searchCp.state" v-for="(cp) in v_searchCp.cps">
          <v-list-item-action>
            <v-icon>search</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title @click="getCp(cp.name)" v-bind:style="{color: 'gray'}">{{cp.name}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- -->
          <v-divider inset></v-divider>            
          <v-list-item @click="">
            <v-list-item-action>
              <v-icon>person</v-icon>
            </v-list-item-action>

            <v-list-item-content>
                <v-text-field 
                placeholder="직책 입력"
                v-model="v_user.pos"
                type="text"
              ></v-text-field>
            </v-list-item-content>
            </v-list-item>


            <v-list-item @click="">
              <v-list-item-action>
                <v-icon>people</v-icon>
              </v-list-item-action>
                 <v-menu
        v-model="divMenu"
        absolute
        offset-y
      >
        <template v-slot:activator="{ on }">
              <v-list-item-content>
                <v-text-field 
                  placeholder="부서 검색"
                  v-model="v_user.div"
                  type="text"
                ></v-text-field>
              </v-list-item-content>
                      </template>
                              <v-list-item v-for="(div) in v_divs">
            <v-list-item-action>
              <v-icon>search</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title @click="getCp(div)" v-bind:style="{color: 'gray'}">{{div}}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </v-menu>
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
  /*props: [
    'bus'
  ],*/
  data () {
    return {
      v_companys : {},
      v_searchCp : {
        cps: [],
        state: false
      },
      v_divs : {},
      v_user : { 
      id : '',
      pw : '',
      pos : '',
      cp : '',
      div: '',
      },
      divMenu: undefined
    }
  },
  mounted: function () {
    axios.post(`http://webhacker.xyz:8000/apis/db/getCp`)
      .then(r => {
        if(Object.keys(r.data).length > 0){
          this.v_companys = r.data
          console.log('rdata: ', this.v_companys.division)
        }
      })
      .catch(e => console.error(e))
  },
  methods : {
    sub(){
      var ret = 0
      console.log('call the sub function');
      axios.post(`http://webhacker.xyz:8000/apis/db/addUser`, this.v_user)
      .then(r => {
        ret = r.data.code
        //this.bus.$emit('exit', ret)
        console.log(this.$store.state.bus)
        this.$store.state.bus.$emit('exit', ret)
      })
      .catch(e => console.error(e))
      
      this.closeWindow();
    },
    closeWindow(){
      console.log('call the closeWindow function');
      this.$emit('close')
    },
    searchCp(){
      this.v_searchCp.cps = []
      console.log('call SearchCp')
      var len = Object.keys(this.v_companys).length
      for(var i=0; i<len; i++){
        if( (this.v_companys[i].name.includes(this.v_user.cp))/* && (this.v_user.cp.length) > 0*/){
          this.v_searchCp.cps.push(this.v_companys[i])
          this.v_searchCp.state = true
        }
      }
    },
    getCp(name){
      this.v_searchCp.cps = []
      this.v_user.cp = name
      for(var x in this.v_companys)
        if(x.name == name)
          this.v_divs = x.division
      console.log('divs:', this.v_divs)
      console.log('selected name: ' + name)
    },
    getDiv(name){
      this.v_user.div = name
      console.log('selected name: ' + name)
    },
  },
  created () {
  }
}
</script>