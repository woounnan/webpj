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
		    goings: undefined,
			}
		},
    mounted(){
      console.log('idx ::: View.vue :::', this.$store.getters.getIdxView)
      this.setWorks(this.$store.getters.getIdxView)
    },
    methods: {
      setWorks(idx){
        console.log('this.idx_sep ::: View.vue :::', idx)
        this.$store.commit('init_idxSepKey', idx)
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
      },
    },
	}
</script>
