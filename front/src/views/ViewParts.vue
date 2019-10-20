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
    >진행중{{idx_sep}}</v-app-bar>
        <div class="flex-grow-1"></div>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-checkbox-marked-circle</v-icon>
        </v-btn>

      <v-dialog v-model="viewWork">
        <template v-slot:activator="{ on:dial }">
      <v-list 
          two-line
          style="max-height: 400px"
          class="overflow-y-auto">
          <div v-for="(item, index) in goings">
            <div v-if="item.convs.works.flag_expired == false">
            <v-list-item :key="item.title">

                <v-list-item-content v-on="dial"  @click="setThisWork(item, index)">

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
                  <v-list-item-action-text v-text="item.due"></v-list-item-action-text>
                  <v-icon
                    v-if="!item.favor"
                    color="grey lighten-1"
                    @click="showItem(item)"
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

      <v-dialog v-model="viewWork2">
        <template v-slot:activator="{ on:dial }">
      <v-list 
          two-line
          style="max-height: 400px"
          class="overflow-y-auto">
          <div v-for="(item, index) in goings">
            <div v-if="item.convs.works.flag_expired == true">
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
                  <v-list-item-action-text v-text="item.due"></v-list-item-action-text>
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
      ViewWork,
    },
    props:{
      idx_sep: undefined,
      goings: undefined,
  	},
    data: () => ({
      period: '',
      active: undefined,
      thisWindow: undefined,
      thisJob: undefined,
      viewWork: false,
      viewWork2: false,
      selected: [2],
          /*
      goings: [
        {
          action: '15 min',
          headline: 'Brunch this weekend?',
          title: 'Ali Connors',
          subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        },

      ],
      */
    }),
    mounted(){
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
          console.log('closeViewWork!!', idx)
          if(idx == 1)
            this.viewWork = false
          else if(idx == 2)
            this.viewWork2 = false
        })
      }
    },
    methods: {
      setThis(idx){
        console.log('setThis :::', idx)
        this.thisWindow = idx
      },
      setThisWork(jobs, idx_work){
        this.$store.commit('init_idxWork', idx_work)

        console.log('call setThisWork::::', jobs)
        this.thisJob = jobs
        this.period = jobs.convs.works.startDate + '~' + jobs.convs.works.endDate
      },
      showItem(item){
        console.log('item ::: ViewParts.vue :::', item)
      },
      mySort(){
      }
    },
  }
</script>