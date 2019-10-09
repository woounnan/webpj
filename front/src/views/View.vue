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
          <ViewParts :sep="cur" :idx_sep="idx_cur"/>
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
        idx_cur: undefined,
        cur: {
          type: String,
          default: undefined
        },
				tab: null,
		    tabs: [
		      '요청작업', '받은작업', '보낸알림', '받은알림'
		    ],
		    works: [],
			}
		},
    mounted(){
      this.cur = 'work'
    },
    methods: {
      setCur(idx){
        this.cur = parseInt(idx/2) === 0 ? 'work' : 'notice'
        this.idx_cur = idx
        console.log('idx_cur View.vue::::', this.idx_cur)
        this.$store.state.bus.$emit('setTitle', {sep : parseInt(idx/2) === 0 ? 'work' : 'notice', idx_sep: idx})
      },
    },
	}
</script>
