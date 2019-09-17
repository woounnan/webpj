<template>
	<basic-vue-chat />

	<v-text-field
            v-model="test"
            label="Test"
            solo
          ></v-text-field>
          <v-icon @click="testServ">home</v-icon>
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
	methods: {
		testServe: (){
			console.log('Testing server')
			this.$socket.emit('sendMsg', 'Do you know GangNam Style?')
			this.$socket.on('msg', (msg) => {
				console.log('recieve the message : ' + msg)
			})
		}
	}
};
</script>
