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
        v-for="(item,idx) in tabs"
        :key="item"
        @click="setCur(idx)"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="(item, idx) in tabs"
        :key="item"
        align="start"
        justify="space-between"
      >
          <ViewParts :sep="cur" />
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
        cur: {
          type: String,
          default: undefined
        },
				tab: null,
		    tabs: [
		      '받은작업', '요청작업', '받은알림', '보낸알림'
		    ],
		    works: [],
			}
		},
    mounted(){
      this.getWorks()
      this.$store.state.bus.$emit('setTitle', {sep : parseInt(0/2) === 0 ? 'work' : 'notice'})
    },
    methods: {
      setCur(idx){
        this.cur = parseInt(idx/2) === 0 ? 'work' : 'notice'
         this.$store.state.bus.$emit('setTitle', {sep : parseInt(idx/2) === 0 ? 'work' : 'notice'})
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
