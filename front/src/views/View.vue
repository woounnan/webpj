<template>
	<v-card color="basil">
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
          <ViewParts :idx_sep="idx_cur"/>
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
    props:{
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

        this.$store.state.bus.$on('nextView',  (idx)=>{
          console.log('call nextView :::', idx)
          this.tab = idx
          this.idx_cur = idx
        })
      this.tab=2
      this.idx_cur = 0
      //현재 시간 설정
      this.$store.commit("setToday")
      setInterval(()=>{this.$store.commit("setToday")}, 0.5 * 3600 * 1000 )
    },
    methods: {
      setCur(idx){
        this.idx_cur = idx
        console.log('idx_cur View.vue::::', this.idx_cur)
        this.$store.state.bus.$emit('setList', idx)
      },
    },
	}
</script>
