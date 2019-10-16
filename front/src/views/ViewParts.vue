<template>
	<v-container>
	<v-row >
	   <v-col cols="6">
      <v-card
        class="mx-auto"
        @click="setThis(1)"
      >
        <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >진행중</v-app-bar>
        <div class="flex-grow-1"></div>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-checkbox-marked-circle</v-icon>
        </v-btn>
      
      <v-list 
          two-line
          style="max-height: 500px"
          class="overflow-y-auto">
          <div v-for="(item, index) in goings">
            <v-list-item :key="item.title">

                <v-list-item-content @click="setThisWork(item)">

                  <v-list-item-title>

                 <v-chip
                  class="ma-2"
                  color="primary"
                  v-for="(one, idx) in item.to.slice(0,3)"
                >
                  {{one.position}}
                </v-chip>

                  <v-icon
                    v-if="item.to.length>3">more_horiz</v-icon>

                </v-list-item-title>
                    <v-list-item-subtitle class="text--primary" >{{item.convs.works.title}}</v-list-item-subtitle>
                  <v-list-item-subtitle v-text="item.convs.works.contents"></v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                  <v-list-item-action-text v-text="item.convs.works.due"></v-list-item-action-text>
                  <v-icon
                    v-if="!item.favor"
                    color="grey lighten-1"
                  >
                    star_border
                  </v-icon>

                  <v-icon
                    v-else
                    color="yellow"
                  >
                    star
                  </v-icon>
                </v-list-item-action>
            </v-list-item>
       

            <v-divider
              v-if="index + 1 < goings.length"
              :key="index"
            ></v-divider>
          </div>
      </v-list>
           <ViewWork  :jobs="thisJob" :idx_sep="thisWindow" :period="period" /> 

            <modals-container hide-backdrop />
    </v-card>

  </v-col>

  <v-col cols="6">
      <v-card
        class="mx-auto"
        @click="setThis(2)"
      >
        <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >지나간</v-app-bar>
        <div class="flex-grow-1"></div>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-checkbox-marked-circle</v-icon>
        </v-btn>

      <v-dialog v-model="viewWork2" justify="center">
        <template v-slot:activator="{ on:dial }">
      <v-list 
          two-line
          style="max-height: 500px"
          class="overflow-y-auto">
          <div v-for="(item, index) in goings">
            <v-list-item :key="item.title">
                <v-list-item-content v-on="dial"  @click="setThisWork(item)" >

                  <v-list-item-title>

                 <v-chip
                  class="ma-2"
                  color="primary"
                  v-for="(one, idx) in item.to.slice(0,3)"
                >
                  {{one.position}}
                </v-chip>

                  <v-icon
                    v-if="item.to.length>3">more_horiz</v-icon>

                </v-list-item-title>
                    <v-list-item-subtitle class="text--primary" >{{item.convs.works.title}}</v-list-item-subtitle>
                  <v-list-item-subtitle v-text="item.convs.works.contents"></v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                  <v-list-item-action-text v-text="item.convs.works.due"></v-list-item-action-text>
                  <v-icon
                    v-if="!item.convs.works.favor"
                    color="grey lighten-1"
                  >
                    star_border
                  </v-icon>

                  <v-icon
                    v-else
                    color="yellow"
                  >
                    star
                  </v-icon>
                </v-list-item-action>

            </v-list-item>
       

            <v-divider
              v-if="index + 1 < goings.length"
              :key="index"
            ></v-divider>
          </div>
      </v-list>
      </template>
                 <ViewWork :jobs="thisJob" :idx_sep="thisWindow" :period="period"/> 

    </v-dialog>
    </v-card>

  </v-col>

</v-row>
</v-container>

</template>
<script>
  import ViewWork from './ViewWork.vue'
	import Vue from 'vue'
  export default {
    components:{
      ViewWork
    },
    props:{
      idx_sep: undefined,
  	},
    data: () => ({
      period: '',
      active: undefined,
      thisWindow: undefined,
      thisJob: undefined,
      viewWork: false,
      viewWork2: false,
      selected: [2],
      goings: [
      /*
        {
          action: '15 min',
          headline: 'Brunch this weekend?',
          title: 'Ali Connors',
          subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        },
        */
      ],
    }),
    created(){
      this.$store.state.bus.$on('closeViewWork', (idx)=>{
        if(idx == 1)
          this.viewWork = false
        else
          this.viewWork2 = false
      })
      console.log('idx_sep::::', this.idx_sep)
      this.setItems(this.idx_sep)
      setInterval(this.setItems(this.idx_sep),1000*60)
    	this.$store.state.bus.$on('setList', data => {		
        console.log('receive setList idx_sep::::', data.idx_sep)
      this.setItems(data.idx_sep)
    	})
    },
    methods: {
      setThis(idx){
        this.thisWindow = idx
      },
      setThisWork(jobs){
        console.log('call setThisWork::::', jobs)
        this.thisJob = jobs
        this.period = jobs.convs.works.startDate + '~' + jobs.convs.works.endDate

        this.$modal.show(ViewWork,
          {
            //bus : this.ps.bus,
            modal : this.$modal,
            jobs:this.thisJob,
            idx_sep:this.thisWindow,
            period:this.period,
          },
          {
            name: 'dynamic-modal',
            width: '100%',
            height: '100%',
            draggable: true
          }
        )
      },
      setItems(idx){
        console.log('call setItems:::')
        switch(idx){
          case 0:
            this.goings = this.$store.getters.getUser.works.toWork
            break
          case 1:
            this.goings = this.$store.getters.getUser.works.fromWork
            break
          case 2:
            this.goings = this.$store.getters.getUser.works.toNotice
            break
          case 3:
            this.goings = this.$store.getters.getUser.works.fromNotice
            break
        }
      },
      mySort(){
      }
    },
  }
</script>