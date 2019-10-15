<template>
<v-container>
	<v-row 
		row wrap
		style="height: 780px;"
	>
		<v-col
			cols="9">
			<Preview />
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
import moment from 'moment'
import Chat from '../../node_modules/basic-vue-chat/src/components/basic-vue-chat/BasicVueChat.vue'
import Bar from './Bar.vue'
import List from './List.vue'
import Preview from './Preview.vue'
import io from 'socket.io-client'
export default{
	name: 'App',
	components: {
		Chat,
		List,
		Bar,
		Preview
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
   		this.sendWork()
   	},
	methods: {
		sendWork(){
			this.$store.state.bus.$on('sendWork', (data)=>{
				console.log('here is in sendWork::::', data)
				data.convs.works.flag_date = data.convs.date
				data.convs.date = moment().format('HH:mm:ss')
				data.convs.works.state_s = '승인대기'
				data.convs.id = this.$store.getters.getUser.id
				data.convs.position = this.$store.getters.getUser.position
				data.convs.works.flag_onlyView = true
				var to = ''
				this.$store.getters.getOthers.forEach(x => {
					if(x.id === data.convs.works.by){
						to = x.position
						return
					}
				})
				const header = {
				to : to,
				from : this.$store.getters.getUser.position
				}
				this.$store.state.socks.sock.emit('msg', {msg: data.convs, header: header})

				console.log('이사람에게 보냈어::::', to)
			})
		}
	}
};
</script>
