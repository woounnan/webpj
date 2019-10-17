<template>
	<v-card
		max-height="250px"
        class="overflow-y-auto"
	>
		<v-toolbar
			color="deep-purple accent-2"
			dark 
		>
			<v-toolbar-title>
				{{title}}
			</v-toolbar-title>
		</v-toolbar>
		<v-dialog v-model="viewWork" width="1000px"  justify="center">
        <template v-slot:activator="{ on:dial }">
      <v-list 
          two-line
      >
          <div v-for="(item, index) in goings.slice(0,3)">
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
           <ViewWork  :jobs="thisJob" :period="period" /> 
    </v-dialog>
		<v-card-actions>
			<v-btn text>더보기</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
	import ViewWork from './ViewWork.vue'
	export default {
		components:{
			ViewWork,
		},
		props:{
			goings: undefined,
			title: '',
		},
		data(){
			return {
				viewWork: false,
				dial: '',
				period: '',
				thisJob: undefined,
			}
		},
		created(){
			var eve = 'closeViewWork'
			this.$store.state.bus.$on(eve,  (idx)=>{
			    this.viewWork = false
			})
		},
		methods:{
			setThisWork(jobs){
				this.thisJob = jobs
				this.period = jobs.convs.works.startDate + '~' + jobs.convs.works.endDate
			}
		}
	}
</script>