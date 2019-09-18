<template>
	<!--<basic-vue-chat /> -->

	<div>
	<v-text-field
            v-model="test"
            label="Test"
            solo
          ></v-text-field>
     <v-btn @click="testServ">home</v-btn>
</div>
</template>

<script>
import BasicVueChat from '../../node_modules/basic-vue-chat/src/components/basic-vue-chat/BasicVueChat.vue'

export default{
	name: 'App',
	components: {
		BasicVueChat
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
    io.emit("sendMsg", '12345')
   },
	methods: {
		testServ: function(){
			var socket = io.connect('http://webhacker.xyz:8001')
			socket.on('sendMsg', (data) => {
				console.log('from server: ' + data)
				socket.emit('msg', 'Hello! Im client!!')
			})
			/*
			console.log('Testing server')
			this.$socket.emit('sendMsg', 'Do you know GangNam Style?')
			this.$socket.on('msg', (msg) => {
				console.log('recieve the message : ' + msg)
			})
			*/
		}
	}
};
</script>
