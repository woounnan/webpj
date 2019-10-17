<template>
	<v-card color="basil">
    <v-tabs
      v-model="$store.state.idxView"
      background-color="transparent"
      color="basil"
      grow
    >
      <v-tab
        v-for="(item,idx) in tabs"
        :key="item"
        @click="setWorks(idx)"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="$store.state.idxView">
      <v-tab-item
        v-for="(item, idx) in tabs"
        :key="item"
        align="start"
        justify="space-between"
      >
          <ViewParts :goings="goings"/>
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
		    goings: [],
			}
		},
    mounted(){
      //현재 시간 설정
      this.setWorks(this.$store.getters.getIdxView)
      this.$store.commit("setToday")
      setInterval(()=>{this.$store.commit("setToday")}, 0.5 * 3600 * 1000 )
    },
    methods: {
      setWorks(idx){
        console.log('setWorks!!!', idx)
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
        console.log('goings ::: ',this.goings)
      },
    },
	}
</script>
