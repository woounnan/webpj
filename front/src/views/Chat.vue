<template>
<v-container>
	<v-row 
		row wrap
		style="height: 780px;"
	>
		<v-col
			cols="9">
			<v-row>
				<v-col cols="5">
					<v-card>
						111
					</v-card>
				</v-col>
				<v-col cols="5">
					<v-card>
						111
					</v-card>
				</v-col>
				<v-col cols="5">
					<v-card>
						111
					</v-card>
				</v-col>
			</v-row>
			<v-row row wrap>
				<v-col cols="5">
					<v-card>
						222
					</v-card>
				</v-col>
				<v-col cols="4">
					<v-card>
						333
					</v-card>
				</v-col>
				<v-col cols="4">
					<v-card>
						555
					</v-card>
				</v-col>
			</v-row>
		</v-col>	
		<v-col 
			cols="3">
			<v-row row wrap>
				<List @click="testServ" />
			</v-row>
		</v-col>
	</v-row>
	<v-row>
		<v-col align="end" cols="12">
  			<Bar />
  		</v-col>
	</v-row>
</v-container>
</template>
<script>
import Chat from '../../node_modules/basic-vue-chat/src/components/basic-vue-chat/BasicVueChat.vue'
import Bar from './Bar.vue'
import List from './List.vue'
import io from 'socket.io-client'
export default{
	name: 'App',
	components: {
		Chat,
		List,
		Bar
	},
	data: function (){
		return {
			message: {},
			test : '',
			layout: [
	          ['toolbar', 1, 1, 'list'],
	          [0, 0, 0, 0],
        	]
		}
	},
	created(){
	},
   	mounted(){
   		this.$store.commit('initSocks')
   	},
	methods: {
		testServ: function(){
			
		}
	}
};
</script>
