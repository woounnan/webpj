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
        :key="idx"
      >
        <v-card flat color="basil">
          <v-card-text>{{ text[idx] }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
<script>
	import ViewParts from './ViewParts.vue'
	export default{
    components:{
    },
		data(){
			return {
				tab: null,
		    tabs: [
		          '처리할일', '요청한일', '받은알림', '보낸알림'
		        ],
		        text: [
              '1111', '2222', '3333', '4444'
            ],
			}
		}
	}
</script>
