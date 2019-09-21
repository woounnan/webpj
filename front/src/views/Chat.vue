<template>
	 <v-container fluid>
    <v-row>
       <v-col cols="12">
        <v-row
          align="end"
          justify="center"
          class="grey lighten-5"
          style="height: 300px;"
        >
          <v-card
            v-for="n in 3"
            :key="n"
            class="ma-3 pa-6"
            outlined
            tile
          >
            Column
          </v-card>
        </v-row>
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
	          [1, 1, 'list'],
	          [1, 1],
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
