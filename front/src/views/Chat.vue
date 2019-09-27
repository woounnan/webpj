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
				<List />
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
	sockets: {
		connect: function(){
			this.flowSC = io.of('/SC')
			this.flowCS = io.of('/CS')
			console.log('flowSc:', this.flowSC)
			this.flowSC.on('msg', (data) =>{
				console.log('from server: ', data)
			})
		},
		customEmit: function (data) {
            console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
        }
	},
	created(){
	},
   	mounted(){
   	},
	methods: {
		testServ: function(){
			
			console.log('Testing server')
			console.log('socket:', this.$socket)
			this.$socket.emit('sendMsg', 'Do you know GangNam Style?')
			this.$socket.on('msg', function(data){
				console.log('from server: ' + data)
			})
			
		}
	}
};
</script>
