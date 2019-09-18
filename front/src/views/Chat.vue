<template>
	<basic-vue-chat />

	<div>
	<v-text-field
            v-model="test"
            label="Test"
            solo
          ></v-text-field>
     <v-btn @click="testServ">home</v-btn>
</div>
<List />

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
			test : ''
		}
	},
	sockets: {
    connect: function() {
     console.log('socket connected')
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
			this.$socket.on('msg', (msg) => {
				console.log('recieve the message : ' + msg)
			})
		}
	}
};
</script>
