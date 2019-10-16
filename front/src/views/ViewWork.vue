
<template>
  <v-row>
    <v-col cols="12" sm="8">
      <v-card>
        <v-card-title class="cyan darken-1">

            <span class="headline white--text">상세 보기</span>


          
            <div class="flex-grow-1"></div>
            <v-btn v-if="jobs.convs.works.state_s === '미제출'" depressed large color="error">미제출</v-btn>
            <v-btn v-if="jobs.convs.state_s === '승인대기'" depressed large color="primary">승인대기</v-btn>
            <v-btn v-if="jobs.convs.state_s === '승인거절'" depressed large color="orange darken-3 white--text">승인거절</v-btn>
            <v-btn v-if="jobs.convs.state_s === '승인완료'" depressed large color="green darken-1 white--text">승인완료</v-btn>

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
                v-model="jobs.convs.title"
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
                v-model="jobs.convs.contents"
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
            <v-list-item-action>
              <v-icon>system_update_alt</v-icon>
            </v-list-item-action>
          </v-col>
            <v-col cols="5">
              <v-list-item-content>
                <v-chip
                v-if="works.convs.flag_upload"
                color="deep-purple"
                text-color="white"
                @click="showUpload"
                width="5px"
              >
              {{works.file_real}}
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
        <!-- 받은 작업이면 -->
      <template v-if="jobs.convs.works.by === $store.getters.getUser.id" v-for="(item, index) in jobs.to">
        <v-subheader
        >대상</v-subheader>

        <v-divider
          :key="index"
          :inset="inset"
        ></v-divider>

        <v-list-item
          :key="item.position"
        >
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.position"></v-list-item-title>
            <!--
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          -->
          </v-list-item-content>

          <v-list-item-content>
            <v-btn v-if="item.state === '미제출'" depressed small color="error">미제출</v-btn>
            <v-btn v-if="item.state === '승인대기'" depressed small color="primary">승인대기</v-btn>
            <v-btn v-if="item.state === '승인거절'" depressed small color="orange darken-3 white--text">승인거절</v-btn>
            <v-btn v-if="item.state === '승인완료'" depressed small color="green darken-1 white--text">승인완료</v-btn>
         </v-list-item-content>
          <v-list-item-content>
            <v-icon :color="item.flag_upload ? 'deep-purple accent-4' : 'grey'">insert_drive_file</v-icon>
          </v-list-item-content>
          <v-list-item-content>
            <v-list-item-subtitle >2019-10-09-14:00</v-list-item-subtitle>
          </v-list-item-content>
            <div v-if="item.state === '승인대기'">
              <v-btn class="mx-2" fab dark small color="indigo">
                <v-icon dark>done</v-icon>
              </v-btn>
              <v-btn class="mx-2" fab dark small color="pink">
                <v-icon dark>close</v-icon>
              </v-btn>
           </div>
        </v-list-item>
      </template>
      <template v-else>
        <v-list-item>
          <div class="flex-grow-1"></div>
          <v-btn @click="sendWorkToS('승인대기')" depressed large color="cyan darken-4 white--text">제출하기</v-btn>
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
      }
    },
    mounted(){
      console.log('ViewWork.vue::::::', this.jobs)
    },
    methods: {
      closeWindow(){
        console.log('call closeWindow in ViewWork.vue::::', this.idx_sep)
        this.$store.state.bus.$emit('closeViewWork', this.idx_sep)
      },
      sendWorkToS(state){
        console.log('call sendWorkToS::::')
        //update mine
        this.jobs.convs.works.state_c = state
        this.$store.state.bus.$emit('sendWork', this.jobs)
      },
      showDate(){
        console.log('date ::::', this.period)
      },
      showUpload(){
        console.log('flag_upload ::::', this.works.flag_upload)
      },
    },
  }
</script>
