<template>
  <v-app id="inspire">
    <v-content>
      <v-container
      class="fill-height"
      fluid
      >
        <v-row
          align="center" justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <modals-container hide-backdrop />
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
              <div>
                      <v-alert v-model="wd.state" :type="wd.type" dismissible >
              {{wd.msg}}
            </v-alert>
        </div>


  </v-app>
</template>

<script>
  import Vue from 'vue'
  import Register from './enroll/Register.vue'
  import axios from 'axios'
  export default {
    mounted() {
    },
    data () {
      return {
          up : true,
        form: {
          id: '',
          pw: ''
        },
        wd: {
          msg: '',
          state: false,
          type: 'error'
        }/*,
        ps:{
          bus : new Vue()
        }*/
      }
    },
    methods: {
      reg(){
        console.log('call reg function');
          //location.href = '/reg' //normal move
          //this.ps.bus.$on('exit', (code) => {
          this.$store.state.bus.$on('exit', (code) => {
          console.log('code:' + code)
          if(code == 1){
            this.wd.type = 'success'
            this.wd.state = true
            this.wd.msg = '등록 성공'
          }else{
            this.wd.type = 'error'
            this.wd.state = true
            this.wd.msg = '등록 실패'
          }
        })
        this.$modal.show(Register,
          {
            //bus : this.ps.bus,
            modal : this.$modal
          },
          {
            name: 'dynamic-modal',
            width: '100%',
            height: '100%',
            draggable: true
          }
        )
      },
      check(){
        var id = this.form.id
        var pw = this.form.pw

        this.login(id.split(' ').join(''), pw.split(' ').join(''))
      },
      login(id, pw){
        axios.post(`http://192.168.132.129:3000/apis/login`, {id: id, pw: pw})
          .then(r => {
            if(r.data.code != '1'){
              this.wd.state = true
              this.wd.msg = '잘못된 입력'
              this.wd.type = 'error'
            }
            else{
              localStorage.setItem('tk', r.data.tk)
              var u = r.data.user
              this.$store.commit('initUser', {
                id : u.id,
                position: u.position,
                image: u.image,
                division: u.division,
                company: u.company
                })
              return axios.post('http://192.168.132.129:3000/apis/db/getUsers', {id: this.$store.getters.getUser.id})
            }
          })
          .then(r => {
            this.$store.commit('initOthers', r.data.users)
            this.$store.commit('setTk')
            this.$store.commit('initDivisions')
            this.$router.push('/')
          }) 
          .catch(e => console.error(e.message))


     }

  }
}

</script>
