<template>
	<v-card color="basil">
    <v-card-title class="text-center justify-center py-6">
      <h3 class="font-weight-bold display-3 basil--text">목록</h3>
    </v-card-title>

    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="basil"
      grow
    >
      <v-tab
        v-for="item in tabs"
        :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="(item, idx) in tabs"
        @click="setCur(idx)"
        :key="item"
        align="start"
        justify="space-between"
      >
      <v-row>
        <v-col>
          <ViewParts :cr="cur" :title="titles[cur/2][1]"/>
      </v-col>
      <v-col>
          <ViewParts :cr="cur" :title="titles[cur/2][2]"/>
      </v-col>
      </v-row>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
<script>
	import ViewParts from './ViewParts.vue'
  import axios from 'axios'
	export default{
    components:{
      ViewParts,
    },
		data(){
			return {
        cur: Number,
				tab: null,
		    tabs: [
		      '받은작업', '요청작업', '받은알림', '보낸알림'
		    ],
        titles: [
          ['진행중인 일', '지나간 일'],
          ['진행중인 알림', '지나간 알림'],
        ],
		    works: [],
			}
		},
    mounted(){
      this.getWorks()
    },
    methods: {
      setCur(idx){
        this.cur = idx
      },
      getWorks(){
        axios.post('http://webhacker.xyz:8000/apis/db/getWorks', {id: this.$store.getters.getUser.id})
          .then(r =>{
            console.log('getWorks in View.vue ::::', r.data)
          }) 
          .catch(e=>{
            console.error('getWorks in View.vue::::', e)
          })
      }
    },
	}
</script>
