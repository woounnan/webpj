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
              <v-icon>mdi-map-marker</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-text-field 
                placeholder="대상 선택"
                v-model="v_user.cp"
                type="text"
                @click="searchAll"
                v-on:keyup="searchPs"
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

          <v-divider inset></v-divider>

          <v-list-item @click="">
            <v-list-item-action>
              <v-icon>lock</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-text-field 
                placeholder="제목 입력"
                v-model="v_user.pw"
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
                <v-text-field 
                placeholder="내용 입력"
                v-model="v_user.pw"
                type="text"
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
                placeholder="시작일"
                v-model="v_work.startDate"
              />
              <v-text-field 
                placeholder="종료일"
                v-model="v_work.endDate"
              />
            </v-list-item-content>
          </v-list-item>
          <v-divider inset></v-divider>            
          <v-list-item @click="">
            <v-list-item-action>
              <v-icon>system_update_alt</v-icon>
            </v-list-item-action>

            <v-list-item-content align="center">
              <!--
              <v-file-input
                type="file"
                id="bin"
              />
            -->
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

      <span
        v-else-if="index === 2"
        class="overline grey--text text--darken-3 mx-2"
      >
        +{{ files.length - 2 }} File(s)
      </span>
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
      v_ps : {},
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
  },
  created () {
  }
}
</script>