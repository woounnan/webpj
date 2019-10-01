<template>
  <v-row justify="center">
    <v-col cols="12" sm="8">
      <v-card>
        <v-card-title class="cyan darken-1">
          <span class="headline white--text">작업 요청</span>

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
              <v-icon>people</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-text-field 
                placeholder="대상 선택"
                v-model="v_searchPs.cur"
                type="text"
                @click=""
                v-on:keyup="searchPs"
              >
              </v-text-field>
            </v-list-item-content>
          </v-list-item>
             <!--show list result for searching -->
        <v-list-item @click="" v-if="v_searchPs.state" v-for="(ps) in v_searchPs.ps">
          <v-list-item-action>
            <v-icon>search</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title @click="selPs(ps)" v-bind:style="{color: 'gray'}">{{ps}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
          <v-chip
                v-for="(item, idx) in v_work.selects"
                class="ma-2"
                close
                color="deep-purple"
                text-color="white"
                @click:close="popPs(idx)"
              >
                {{item}}
              </v-chip>
          <v-divider inset></v-divider>

          <v-list-item @click="">
            <v-list-item-action>
              <v-icon>lock</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-text-field 
                placeholder="제목 입력"
                v-model="v_work.title"
                type="text"
              ></v-text-field>
            </v-list-item-content>
          </v-list-item>

        <!-- -->
          <v-divider inset></v-divider>            
          <v-list-item @click="">
            <v-list-item-action>
              <v-icon>face</v-icon>
            </v-list-item-action>

            <v-list-item-content>
                <v-textarea 
                placeholder="내용 입력"
                v-model="v_work.contents"
                counter
                maxlength="120"
                full-width
                single-line
                type="text"
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
                <v-menu
                  v-model="cal1"
                  absolute
                  offset-y
                >
                <template v-slot:activator="{ on }">
                <v-col cols="6">
                <v-text-field 
                placeholder="시작일"
                v-model="v_work.startDate"
                v-on="on"
              />
            </v-col>

                         </template>
              <v-date-picker v-model="v_work.startDate" :max="v_work.endDate" />
    </v-menu>

   <v-menu
      v-model="cal2"
      absolute
      offset-y
    >

                <template v-slot:activator="{ on }">

            <v-col cols="6">

              <v-text-field 
                placeholder="종료일"
                v-model="v_work.endDate"
                v-on="on"
              />
            </v-col>
                         </template>
            <v-date-picker v-model="v_work.endDate" :min="v_work.startDate" />
     </v-menu>
            </v-row>

            </v-list-item-content>
          </v-list-item>
          <v-divider inset></v-divider>            
          <v-list-item @click="">
            <v-list-item-action>
              <v-icon>system_update_alt</v-icon>
            </v-list-item-action>

            <v-list-item-content align="center">

            <v-file-input
    v-model="upFiles"
    id="bin"
    color="deep-purple accent-4"
    counter
    label="File input"
    multiple
    placeholder="Select your files"
    outlined
    :show-size="1000"
  >
    <template v-slot:selection="{ index, text }">
      <v-chip
        v-if="index < 2"
        color="deep-purple accent-4"
        dark
        label
        small
      >
        {{ text }}
      </v-chip>
    </template>
  </v-file-input>

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
  /*props: [
    'bus'
  ],*/
  data () {
    return {
      v_chip: true,
      v_divisions : [],
      v_ps: [],
      v_searchPs : {
        cur: '',
        ps: [],
        state: false
      },
      v_work : { 
        selects: [],
        title: '',
        contents: '',
        files: undefined,
        startDate: '',
        endDate: '' 
      },
      selectDate: '',
      startEnd: '',
      cal1: undefined,
      cal2: undefined,
      upFiles: [
      ]
    }
  },
  mounted: function () {
    var cps = this.$store.getters.getCompanys
    for(var i=0; i< cps.length; i++){
      if(cps[i].name === this.$store.getters.getUser.company){
        this.v_divisions = cps[i].division
        break
      }
    }
    this.v_ps = this.$store.getters.getOthers
  },
  methods : {
    popPs(idx){
      this.v_work.selects.splice(idx, 1)
    },
    selPs(position){
      this.v_work.selects.push(position)
      this.v_searchPs.state = false
    },
    uploadFile(){
      console.log('call uploadFile')
    },
    sub(){
      var ret = 0
      console.log('call the sub function');
      
      const fd = new FormData()
      console.log(document.getElementById('bin').files[0])
      fd.append('name', 'xxxx')
      fd.append('bin', document.getElementById('bin').files[0])
      axios.post(`http://webhacker.xyz:8000/apis/db/save`, fd)
      .then(r => {
        //ret = r.data.code
        //this.bus.$emit('exit', ret)
        //this.$store.state.bus.$emit('exit', ret)
        console.log('Upload file succeeded')
      })
      .catch(e => console.error(e))
      
      //this.closeWindow();
    },
    closeWindow(){
      console.log('call the closeWindow function');
      this.$emit('close')
    },
    searchPs(){
      this.v_searchPs.ps = []
      var len = Object.keys(this.v_ps).length
      console.log('searchPs::::v_ps = ', this.v_ps)
      for(var i=0; i<len; i++){
        if( (this.v_ps[i].position.includes(this.v_searchPs.cur)) && (this.v_searchPs.cur.length > 0)){//search ps
          console.log('true::::', this.v_ps[i].position)
          if(this.v_work.selects.indexOf(this.v_ps[i].position)== -1){
          this.v_searchPs.ps.push(this.v_ps[i].position)
          this.v_searchPs.state = true
          console.log('true222::::', this.v_searchPs.ps)
          }
        }
      }
      if(this.v_searchPs.state = false){
      len = this.v_divisions.length
        for(var i=0; i<len; i++){//search divisions
          if( (this.v_divisions.includes(this.v_searchPs.cur)) && (this.v_searchPs.cur.length > 0)){
            if(this.v_work.selects.indexOf(this.v_divisions)== -1){
              this.v_searchPs.ps.push(this.v_divisions[i])
              this.v_searchPs.state = true
            }
          }
        }
      }
    },
  },
  created () {
  }
}
</script>