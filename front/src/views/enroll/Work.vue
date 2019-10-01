<template>
  <v-row justify="center">
    <v-col cols="12" sm="8">
      <v-card>
        <v-card-title class="cyan darken-1">
          <span class="headline white--text">작업 등록</span>

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
                v-model="v_work.ps"
                type="text"
                @click="searchAll"
                v-on:keyup="searchPs"
              ></v-text-field>
            </v-list-item-content>
          </v-list-item>
             <!--show list result for searching -->
        <v-list-item @click="" v-if="v_searchPs.state" v-for="(ps) in v_searchPs.ps">
          <v-list-item-action>
            <v-icon>search</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title @click="getCp(ps)" v-bind:style="{color: 'gray'}">{{ps}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

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
      v_ps : [],
      v_searchPs : {
        ps: [],
        state: false
      },
      v_work : { 
        ps_cur: '',
        ps: [],
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
    axios.post(`http://webhacker.xyz:8000/apis/db/getCp`)
      .then(r => {
        if(Object.keys(r.data).length > 0){
          this.v_ps = r.data.name
        }
      })
      .catch(e => console.error(e))
  },
  methods : {
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
    searchAll(){
      this.v_searchPs.ps = this.ps
    },
    searchPs(){
      this.v_searchPs.ps = []
      var len = Object.keys(this.v_ps).length
      for(var i=0; i<len; i++){
        if( (this.v_ps[i].name.includes(this.v_work.ps_cur)) && (this.v_work.ps_cur.length) > 0){
          this.v_searchPs.ps.push(this.v_ps[i])
          this.v_searchPs.state = true
        }
      }
    },
    openDial(){
      console.log('close dialog')
    }
  },
  created () {
  }
}
</script>