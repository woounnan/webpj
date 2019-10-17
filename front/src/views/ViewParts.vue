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

      <v-dialog v-model="viewWork" width="1000px"  justify="center">
        <template v-slot:activator="{ on:dial }">
      <v-list 
          two-line
          style="max-height: 400px"
          class="overflow-y-auto">
          <div v-for="(item, index) in goings">
            <v-list-item :key="item.title">

                <v-list-item-content v-on="dial"  @click="setThisWork(item)">

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
          </template> 
           <ViewWork  :jobs="thisJob" :idx_sep="thisWindow" :period="period" /> 

    </v-dialog>
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
          style="max-height: 400px"
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
      console.log('mount ViewParts')
      var eve = 'closeViewWork'
      /*
      if(this.$store.getters.getMountedCheck.indexOf(eve) == -1){
        this.$store.commit('pushMountedCheck', eve)
        this.$store.state.bus.$on(eve,  (idx)=>{
            if(idx == 1)
              this.viewWork = false
            else
              this.viewWork2 = false
        })
      }
      */
      if(this.$store.getters.getMountedCheck.indexOf(eve) == -1){
        this.$store.commit('pushMountedCheck', eve)
        this.$store.state.bus.$on('closeViewWork',  (idx)=>{
          console.log('closeViewWork!!')
          if(idx == 1)
            this.viewWork = false
          else
            this.viewWork2 = false
        })
      }
      var eve = 'setList'
      if(this.$store.getters.getMountedCheck.indexOf(eve) == -1){
          this.$store.commit('pushMountedCheck', eve)
          this.$store.state.bus.$on(eve,  (idx)=>{
          console.log('setList:::', idx)
          this.setItems(idx)
        })
      }
      if(this.idx_sep != undefined)
        this.setItems(this.idx_sep)
    },
    methods: {
      setThis(idx){
        this.thisWindow = idx
      },
      setThisWork(jobs){
        console.log('call setThisWork::::', jobs)
        this.thisJob = jobs
        this.period = jobs.convs.works.startDate + '~' + jobs.convs.works.endDate
      },
      setItems(idx){
        console.log('call setItems:::', idx)
        switch(idx){
          case 0:
            this.goings = this.$store.getters.getUser.works.toWork
            console.log('0000000000 ::: ', this.goings)
            break
          case 1:
            this.goings = this.$store.getters.getUser.works.fromWork
            console.log('111111111 ::: ', this.goings)
            break
          case 2:
            this.goings = this.$store.getters.getUser.works.toNotice
            console.log('222222222 ::: ', this.goings)
            break
          case 3:
            this.goings = this.$store.getters.getUser.works.fromNotice
            console.log('33333333 ::: ', this.goings)
            break
        }
      },
      mySort(){
      }
    },
  }
</script>