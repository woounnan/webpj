<template>
	<v-container fluid>
	    <v-row v-for="i in layout">
	       	<v-col cols="3" v-for="j in i">
	       		<v-card v-if="j===1">
	       			Empty
	       		</v-card>
	       		<List v-if="j==='list'" />
	       	</v-col>
	  	</v-row>
	  	<v-row>
	  		<v-col cols="12">
	  			<Bar />
	  		</v-col>
	  	</v-row>
	</v-container>
	<!--
	<div>
	<basic-vue-chat />
<List />
<Bar />
-->
</div>

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
	          [1, 1, 1, 'list'],
	          [0, 0, 0, 0],
	          ['bar']
        	]
		}
	},
	sockets: {
	    connect: function() {
		    console.log('socket connected')

		   	this.$socket.on('test', function(data){
		    	console.log('Chat.vue::from server: ' + data)
	 		})
	 		console.log(this.$socket)
		}
	},
	created(){
		this.socket = io('webhacker.xyz:8081')
	},
  	customEmit: function(val) {
    	console.log('this method was fired by the socket server. eg:')
   	},
   	mounted(){
   		this.socket.on('test', data =>{
   			console.log('from server:', data)
   		})
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
