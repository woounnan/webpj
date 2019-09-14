<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <modals-container />
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login form</v-toolbar-title>
                <div class="flex-grow-1"></div>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="form.id"
                    prepend-icon="person"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    v-model="form.pw"
                    prepend-icon="lock"                    
                    name="password"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn color="primary" @click="reg">등록</v-btn>
                <v-btn color="primary" @click="check">로그인</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
<template>
  <div>
    <v-alert v-model="false" :type="wd.type" dismissible >
      {{wd.msg}}
    </v-alert>
  </div>
</template>
  </v-app>
</template>

<script>
  import Vue from 'vue'
  import Register from './Register.vue'
  import axios from 'axios'
  export default {
    mounted() {
      console.log('mounted!')
      console.log('state : '+ this.wd.state)
      this.$modal.on('show', (event, id) => {
        console.log('Modal is about to be shown', event, id);
      })
    },
    data () {
      return {
          up : "true",
        form: {
          id: '',
          pw: ''
        },
        wd: {
          msg: '잘못된 입력',
          state: "false",
          type: "error"
        },
        ps:{
          bus : new Vue()
        }
      }
    },
    methods: {
      reg(){
        console.log('call reg function');
        //location.href = '/reg' //normal move
        this.ps.bus.$on('test', (code) => {
          this.wd.type = 'success'
          this.wd.state = true
          this.wd.msg = '등록 성공'
        })
        this.$modal.show(Register,
          {
            bus : this.ps.bus,
            modal : this.$modal
          },
          {
            name: 'dynamic-modal',
            width: '100%',
            height: '100%',
            draggable: true
          }, {
          'closed' : (event) => {
            console.log('event occured of close');
          }}
        )
      },
      check(){
        var id = this.form.id
        var pw = this.form.pw
        console.log('type:'+this.wd.type)
        if(id == '' || pw == ''){
          this.wd.state = true
          return -1
        }
        this.login(id.split(' ').join(''), pw.split(' ').join(''))
      },
      login(id, pw){
        axios.post(`http://webhacker.xyz:8000/apis/login`, {id: id, pw: pw})
          .then(r => {
            if(r.data.code != 1){
              this.wd.state = true
            }
            console.log(r.data)
          })
          .catch(e => console.error(e.message))
      },
      showing(){
        this.wd.state = true;
        this.wd.type = 'success';
        this.wd.msg = '등록완료';
      }
    }
}
</script>
