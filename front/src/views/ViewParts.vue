<template>
	<v-container >
	<v-row >
		<v-col cols="6" v-for="(t, x) in title">
		  <v-card
		    max-width="500"
		    class="mx-auto"
		  >
	      <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >{{t}}</v-app-bar>
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
	      <v-list-item-group
	        v-model="selected"
	        multiple
	        active-class="pink--text"
	      >
	        <template v-for="(item, index) in items">
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
	            v-if="index + 1 < items.length"
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
	import Vue from 'vue'
  export default {
  	props:{
      idx_sep: undefined,
    sep: undefined,
  	},
    data: () => ({
      selected: [2],
      title : [],
      titles: {
      	work: ['진행중인 일', '지나간 일'],
      	notice: ['진행중인 알림', '지나간 알림'],
      },
      items: [
      /*
        {
          action: '15 min',
          headline: 'Brunch this weekend?',
          title: 'Ali Connors',
          subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        },
        {
          action: '2 hr',
          headline: 'Summer BBQ',
          title: 'me, Scrott, Jennifer',
          subtitle: "Wish I could come, but I'm out of town this weekend.",
        },
        {
          action: '6 hr',
          headline: 'Oui oui',
          title: 'Sandra Adams',
          subtitle: 'Do you have Paris recommendations? Have you ever been?',
        },
        {
          action: '12 hr',
          headline: 'Birthday gift',
          title: 'Trevor Hansen',
          subtitle: 'Have any ideas about what we should get Heidi for her birthday?',
        },
        {
          action: '18hr',
          headline: 'Recipe to try',
          title: 'Britta Holt',
          subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
        */
      ],
    }),
    created(){
      console.log('idx_sep::::', this.idx_sep)
      this.setItems(this.idx_sep)
    	this.title = this.titles[this.sep]
    	this.$store.state.bus.$on('setTitle', data => {		
    	this.title = this.titles[data.sep]
      console.log('receive setTitle idx_sep::::', data.idx_sep)
      this.setItems(data.idx_sep)
    	})
    },
    methods: {
      setItems(idx){
        console.log('call setItems:::')
        switch(idx){
          case 0:
            this.items = this.$store.getters.getUser.works.toWork
            break
          case 1:
            this.items = this.$store.getters.getUser.works.fromWork
            break
          case 2:
            this.items = this.$store.getters.getUser.works.toNotice
            break
          case 3:
            this.items = this.$store.getters.getUser.works.fromNotice
            break
        }
        console.log('items:::', this.items)
      }
    },
  }
</script>