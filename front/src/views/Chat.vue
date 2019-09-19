<template>
	<div>
	<basic-vue-chat />



     <v-btn @click="testServ">home</v-btn>

<List />
</div>

</template>
<script src='/socket.io/socket.io.js'></script>
<script>
import BasicVueChat from '../../node_modules/basic-vue-chat/src/components/basic-vue-chat/BasicVueChat.vue'
import List from './List.vue'
export default{
	name: 'App',
	components: {
		BasicVueChat,
		List
	},
	data: function (){
		return {
			message: {},
			test : '',
			layout: [
	          [1, 1, 1, 4],
	          [2, 0, 1, 0]
        	]
		}
	},
	sockets: {
    connect: function() {
     console.log('socket connected')

   	this.$socket.on('msg', function(data){
    console.log('Chat.vue::from server: ' + data)
 }
  },
  customEmit: function(val) {
    console.log('this method was fired by the socket server. eg:')
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
