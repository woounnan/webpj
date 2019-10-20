
<template>
  <v-row>
    <v-col cols="12" sm="8">
      <v-card>
        <v-card-title class="cyan darken-1">

            <span class="headline white--text">상세 보기</span>

            <div class="flex-grow-1"></div>
            <div v-if="$store.state.user.works[this.$store.state.p_work.idxSepKey][this.$store.state.p_work.idxWork].convs.works.by != $store.getters.getUser.id">
              <v-btn v-if="$store.state.user.works[this.$store.state.p_work.idxSepKey][this.$store.state.p_work.idxWork].convs.works.state_c === '미제출'" depressed large color="error">미제출</v-btn>
              <v-btn v-if="$store.state.user.works[this.$store.state.p_work.idxSepKey][this.$store.state.p_work.idxWork].convs.works.state_c === '승인대기'" depressed large color="primary">승인대기</v-btn>
              <v-btn v-if="$store.state.user.works[this.$store.state.p_work.idxSepKey][this.$store.state.p_work.idxWork].convs.works.state_c === '승인거절'" depressed large color="orange darken-3 white--text">승인거절</v-btn>
              <v-btn v-if="$store.state.user.works[this.$store.state.p_work.idxSepKey][this.$store.state.p_work.idxWork].convs.works.state_c === '승인완료'" depressed large color="green darken-1 white--text">승인완료</v-btn>
            </div>
            <div v-else>
              <v-btn v-if="$store.state.user.works[this.$store.state.p_work.idxSepKey][this.$store.state.p_work.idxWork].convs.works.state_s === '미제출'" depressed large color="error">미제출</v-btn>
              <v-btn v-if="$store.state.user.works[this.$store.state.p_work.idxSepKey][this.$store.state.p_work.idxWork].convs.works.state_s === '승인대기'" depressed large color="primary">승인대기</v-btn>
              <v-btn v-if="$store.state.user.works[this.$store.state.p_work.idxSepKey][this.$store.state.p_work.idxWork].convs.works.state_s === '승인거절'" depressed large color="orange darken-3 white--text">승인거절</v-btn>
              <v-btn v-if="$store.state.user.works[this.$store.state.p_work.idxSepKey][this.$store.state.p_work.idxWork].convs.works.state_s === '승인완료'" depressed large color="green darken-1 white--text">승인완료</v-btn>
            </div>

          <v-btn dark icon @click="closeWindow">
            <v-icon>cancel</v-icon>
          </v-btn>
        </v-card-title>

        <v-list>
          <v-list-item>
            <v-list-item-action>
              <v-icon>title</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-text-field 
                readonly
                v-model="$store.state.user.works[this.$store.state.p_work.idxSepKey][this.$store.state.p_work.idxWork].convs.works.title"
                type="text"
              ></v-text-field>
            </v-list-item-content>
          </v-list-item>
          <v-divider inset></v-divider>            
          <v-list-item>
            <v-list-item-action>
              <v-icon>text_fields</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-textarea 
                v-model="$store.state.user.works[this.$store.state.p_work.idxSepKey][this.$store.state.p_work.idxWork].convs.works.contents"
                counter
                single-line
                type="text"
                readonly
              />
            </v-list-item-content>
          </v-list-item>
          <v-divider inset></v-divider>            
          <v-list-item>
            <v-row >
              <v-col cols="1">
            <v-list-item-action>
              <v-icon>date_range</v-icon>
            </v-list-item-action>
          </v-col>
                <v-col cols="5">
                <v-text-field
                v-model="period"
                @click="showDate"
                readonly
              />
            </v-col>
            <v-col cols="1">
            <v-list-item-action 
              @click="showUpload"
            >
              <v-icon>system_update_alt</v-icon>
            </v-list-item-action>
          </v-col>
            <v-col cols="5">
              <v-list-item-content>
                <v-chip
                v-if="$store.state.user.works[this.$store.state.p_work.idxSepKey][this.$store.state.p_work.idxWork].convs.works.flag_upload"
                color="deep-purple"
                text-color="white"
                width="5px"
              >
              {{$store.state.user.works[this.$store.state.p_work.idxSepKey][this.$store.state.p_work.idxWork].convs.works.file_s_real}}
            </v-chip>
          </v-list-item-content>
            </v-col>
            </v-row>

          </v-list-item>
          <v-divider inset></v-divider>
        <v-list three-line
          class="overflow-y-auto"  
          style="max-height: 200px" 
        >
          <!-- 요청 작업이면 -->
        <template v-for="(item, index) in jobs.to">
            <v-subheader
            >대상</v-subheader>

            <v-divider
              :key="index"
              :inset="inset"
            ></v-divider>

            <v-list-item
              :key="item.position"
            >
                <v-list-item-avatar  @click="showState(item)">
                <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                <v-list-item-title v-html="item.position"></v-list-item-title>
                <!--
                <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                -->
                </v-list-item-content>

                <template v-if="$store.state.user.works[this.$store.state.p_work.idxSepKey][this.$store.state.p_work.idxWork].convs.works.by === $store.getters.getUser.id">
                  <v-list-item-content @click="showState(item)">
                    <v-btn v-if="item.state === '미제출'" depressed small color="error">미제출</v-btn>
                    <v-btn v-if="item.state === '승인대기'" depressed small color="primary">승인대기</v-btn>
                    <v-btn v-if="item.state === '승인거절'" depressed small color="orange darken-3 white--text">승인거절</v-btn>
                    <v-btn v-if="item.state === '승인완료'" depressed small color="green darken-1 white--text">승인완료</v-btn>
                 </v-list-item-content>
                  <v-list-item-content>
                      <v-icon :color="item.flag_upload ? 'deep-purple accent-4' : 'grey'">insert_drive_file</v-icon>
                  </v-list-item-content>
                  <v-list-item-content>
                      <v-list-item-subtitle >{{item.flag_sendDate}}</v-list-item-subtitle>
                  </v-list-item-content>
                    <div v-if="item.state === '승인대기'">
                        <v-btn class="mx-2" fab dark small color="indigo" @click="sendWorkToS(item, '승인완료')">
                          <v-icon dark>done</v-icon>
                        </v-btn>

                        <v-dialog v-model="reject" scrollable max-width="300px">
                          <template v-slot:activator="{ on:rej }">
                            <v-btn class="mx-2" fab dark small color="pink" v-on="rej" @click="sendWorkToS(item, '승인거절')">
                              <v-icon dark>close</v-icon>
                            </v-btn>
                          </template>
                          <v-card>
                            <v-card-title>거절 사유를 입력하세요.</v-card-title>
                            <v-divider></v-divider>
                                <v-textarea 
                                    placeholder="내용 입력"
                                    v-model="item.comment"
                                    counter
                                    maxlength="120"
                                    full-width
                                    single-line
                                    type="text"
                                />
                            <v-divider></v-divider>
                            <v-card-actions>
                              <v-btn color="blue darken-1" text @click="dialog = false">취소</v-btn>
                              <v-btn color="blue darken-1" text @click="dialog = false">확인</v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                   </div>
                </template>
                <template v-else>
                  <!-- 미제출시 -->
                  <div v-if="item.state==='미제출'">
                    <v-list-item-content>
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
                    <v-list-item-content>
                        <div class="flex-grow-1"></div>
                          <v-btn @click="sendWorkToS(item, '승인대기')" depressed large color="cyan darken-4 white--text">제출하기</v-btn>
                        
                    </v-list-item-content>
                  <v-list-item-content>
                      <v-list-item-subtitle >{{item.flag_sendDate}}</v-list-item-subtitle>
                  </v-list-item-content>
                  </div>
                  <div v-else>
                    <v-list-item-content>
                        <v-icon :color="item.flag_upload ? 'deep-purple accent-4' : 'grey'">insert_drive_file</v-icon>
                    </v-list-item-content> 
                    <v-list-item-content>
                      <v-list-item-subtitle >{{item.flag_sendDate}}</v-list-item-subtitle>
                    </v-list-item-content>                                       
                  </div>
                    <v-list-item-content v-if="item.state==='승인거절'">
                      <v-icon v-on="showComment" :color="item.comment ? 'deep-purple accent-4' : 'grey'">chat_bubble</v-icon>
                    </v-list-item-content>              
                               
                </template>
          </v-list-item>
        </template>
      
    </v-list>              
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
  export default{
    props:{
      idx_sep: 0,
      jobs: undefined,
      period: '',
    },
    data(){
      return {
        inset: true,
        /*
        items: [
        { header: '대상' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        },
        ],
        */
        upFiles: [],
        reject: false,
      }  
    },
    mounted(){
      console.log('ViewWork.vue::::::', this.jobs)
      console.log('idxSepKey ::: setWorks ::: ViewWork :::', this.$store.state.p_work.idxSepKey)
      console.log('idxWork ::: setWorks ::: ViewWork :::', this.$store.state.p_work.idxWork)
      console.log('thisWorks ::: setWorks ::: ViewWork :::', this.$store.state.user.works[this.$store.state.p_work.idxSepKey][this.$store.state.p_work.idxWork])
    },
    methods: {
      closeWindow(){
        console.log('call closeWindow in ViewWork.vue::::', this.idx_sep)
        this.$store.state.bus.$emit('closeViewWork', this.idx_sep)
      },
      sendWorkToS(item, state){
        console.log('call sendWorkToS::::', state)
        //update mine
        item.state = state
        this.jobs.convs.works.state_c = state
        this.$store.state.bus.$emit('sendWork', this.jobs)
      },
      showDate(){
        console.log('date ::::', this.period)
      },
      showUpload(){
        console.log('flag_upload ::::', this.works.flag_upload)
      },
      showState(item){
        console.log('showState - item :::', item)
        console.log('showState - jobs.convs :::', this.jobs.convs)
      },
    },
  }
</script>
