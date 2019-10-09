<template>
	<v-container >
	<v-row >
	<v-col cols="6">
		  <v-card
		    max-width="500"
		    class="mx-auto"
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
	    </v-toolbar>

	    <v-list 
          two-line 
          class="overflow-y-auto"  
          style="max-height: 600px" >
	        <template v-for="(item, index) in goings">
	          <v-list-item :key="item.title">
             

	            <template v-slot:default="{ active, toggle }">
              <v-dialog
                v-model="viewWork"
                class="overflow-y-auto" 
              >
              <template 
                #activator="{ on: dialog}"
              >  
	              <v-list-item-content v-on="dialog">

	                <v-list-item-title>

                 <v-chip
                  class="ma-2"
                  color="primary"
                  v-for="one in item.to"
                >
                  {{one}}
                </v-chip>
                </v-list-item-title>
  	                <v-list-item-subtitle class="text--primary" >{{item.title}}</v-list-item-subtitle>
	                <v-list-item-subtitle v-text="item.contents"></v-list-item-subtitle>
	              </v-list-item-content>
              </template>
              <ViewWork />
            </v-dialog>
	              <v-list-item-action>
	                <v-list-item-action-text v-text="item.due"></v-list-item-action-text>

                  <v-btn>
	                <v-icon
                    @click=""
	                  v-if="!active"
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
                </v-btn>
	              </v-list-item-action>
	          </template> 
	          </v-list-item>

	          <v-divider
	            v-if="index + 1 < goings.length"
	            :key="index"
	          ></v-divider>
	        </template>
	    </v-list>
	  </v-card>

	</v-col>
    <v-col cols="6">
      <v-card
        max-width="500"
        class="mx-auto"
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
      </v-toolbar>

      <v-list 
          two-line 
          class="overflow-y-auto">
        <v-list-item-group
          v-model="selected"
          multiple
          active-class="pink--text"
        >
          <template v-for="(item, index) in goings">
            <v-list-item :key="item.title">
              <template v-slot:default="{ active, toggle }">
                <v-list-item-content>

                  <v-list-item-title>

                 <v-chip
                  class="ma-2"
                  color="primary"
                  v-for="one in item.to"
                >
                  {{one}}
                </v-chip>
                </v-list-item-title>
                    <v-list-item-subtitle class="text--primary" >{{item.title}}</v-list-item-subtitle>
                  <v-list-item-subtitle v-text="item.contents"></v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                  <v-list-item-action-text v-text="item.due"></v-list-item-action-text>
                  <v-icon
                    v-if="!active"
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
            </template> 
            </v-list-item>

            <v-divider
              v-if="index + 1 < goings.length"
              :key="index"
            ></v-divider>
          </template>
        </v-list-item-group>
      </v-list>
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
      viewWork: false,
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
      this.$store.state.bus.$on('closeViewWork', ()=>{
        this.viewWork = false
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
      nav(idx){
        console.log('call nav::::', idx)
      },
      setTime(works){
        console.log('@@@@@@@call sepItem::::', works)
        console.log('왜안돼!!!!!!!!!!!!!!!:::', works.length)
        for(var i = 0; i< works.length; i++){
          console.log('x:::::', works[i])
          
          var sp = works[i].convs.works.endDate.split['-']
          console.log('endDate::::', sp)
          var v_y = sp[0]
          var v_m = sp[1]
          var v_d = sp[2]
          var cur = new Date();
          var end = new Date(v_y, v_m, v_d); 
          console.log((second.getTime())/1000); 
          diff= second - first ;
          one_hour= 60*60 ;
          console.log('diff hours::::',diff/one_hour)
          works[i].due = diff/one_hour
          
        }
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
        //set due time
        this.setTime(this.goings)
      }
    },
  }
</script>