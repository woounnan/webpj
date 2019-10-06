<template>
	<v-container>
	<v-row>
		<div v-for="(title, idx) in titles">
			<v-btn>111</v-btn>
<div v-if="idx===sep">
				<v-col v-for="(t, x) in title">
	  <v-card
	    max-width="500"
	    class="mx-auto"
	  >
	    <v-toolbar
	      color="deep-purple lighten-2"
	      dark
	    >

	      <v-toolbar-title>{{t}}</v-toolbar-title>

	      <div class="flex-grow-1"></div>

	      <v-btn icon>
	        <v-icon>mdi-magnify</v-icon>
	      </v-btn>

	      <v-btn icon>
	        <v-icon>mdi-checkbox-marked-circle</v-icon>
	      </v-btn>
	    </v-toolbar>

	    <v-list two-line>
	      <v-list-item-group
	        v-model="selected"
	        multiple
	        active-class="pink--text"
	      >
	        <template v-for="(item, index) in items">
	          <v-list-item :key="item.title">
	            <template v-slot:default="{ active, toggle }">
	              <v-list-item-content>
	                <v-list-item-title v-text="item.title"></v-list-item-title>
	                <v-list-item-subtitle class="text--primary" v-text="item.headline"></v-list-item-subtitle>
	                <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
	              </v-list-item-content>

	              <v-list-item-action>
	                <v-list-item-action-text v-text="item.action"></v-list-item-action-text>
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
	</div>
</div>

</v-row>
</v-container>
</template>
<script>
	import Vue from 'vue'
  export default {
  	props:{
  	},
    data: () => ({
    sep: undefined,
      selected: [2],
      titles: {
      	work: ['진행중인 일', '지나간 일'],
      	notice: ['진행중인 알림', '지나간 알림'],
      },
      items: [
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
      ],
    }),
    mounted(){
    	console.log('mounted::::', this.sep)
    	this.$store.state.bus.$on('setTitle', data => {
    		console.log('setTitle::::', data.sep)
    		this.sep = data.sep
    	})
    },
    methods: {
    	showTitle(){
    		console.log('setThis::::', this.sep)
    	},
    },
  }
</script>