<template>
<v-container>
	<v-row 
		row wrap
	>
		<v-col
			cols="9">
			<v-container>
		<v-row row wrap>
			<v-col cols="6">
			<Preview :goings="$store.state.user.works.fromWork" :idx_sep="idx1"/>
				
			</v-col>
			<v-col cols="6">
				<Preview :goings="$store.state.user.works.toWork" :idx_sep="idx2"/>
			</v-col>
			<v-col cols="12">
				<Preview :goings="$store.state.user.works.fromNotice" :idx_sep="idx3"/>
			</v-col>
		</v-row>

	</v-container>
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
	props:{
	},
	data: function (){
		return {
			message: {},
			test : '',
			layout: [
	          ['toolbar', 1, 1, 'list'],
	          [0, 0, 0, 0],
        	],
        	idx1: 1,
        	idx2: 0,
        	idx3: 3,
		}
	},
	created(){
   		this.$store.commit('initSocks')
   		this.$store.commit('initWorks')
   		this.sendWork()

		var eve = 'sock_initWorks'
		var cb = function(){
			console.log('call sock_initWorks')
			this.$store.commit('initWorks')
		}
		
   		this.$store.commit('myEmit', eve, cb)
   		/*
		if(this.$store.getters.getMountedCheck.indexOf(eve) == -1){
			this.$store.commit('pushMountedCheck', eve)
	   		this.$store.state.socks.sock.on(eve, function(){
	   			console.log('call sock_initWorks')
		   		this.$store.commit('initWorks')
	   		})
   		}
   		*/
	},
   	mounted(){
		this.$store.commit("setToday")
		setInterval(()=>{this.$store.commit("setToday")},  3600 * 1000 )
   	},
	methods: {
		//첫 등록 이외의 모든 작업 socket 처리
		sendWork(){
			var eve = 'sendWork'
			if(this.$store.getters.getMountedCheck.indexOf(eve) == -1){
				this.$store.commit('pushMountedCheck', eve)
				this.$store.state.bus.$on(eve,  (data)=>{
					console.log('here is in sendWork::::', data)
					data.convs.works.flag_date = data.convs.date
					data.convs.date = moment().format('HH:mm:ss')
					data.convs.id = this.$store.getters.getUser.id
					data.convs.position = this.$store.getters.getUser.position
					data.convs.works.flag_sendDate = this.$store.getters.getToday
					data.to.forEach(x=>{

						console.log('::::', x)
						var to = x.position
						const header = {
						to : to,
						from : this.$store.getters.getUser.position
						}
						this.$store.state.socks.sock.emit('msg', {msg: data.convs, header: header})
						console.log('이사람에게 보냈어::::', to)
					})
					setTimeout(this.$store.state.socks.sock.emit('sock_initWorks', {id: this.$store.getters.getUser.id}), 1000)
				})
			}
		},
		showState(){
			console.log(this.$store.state.user.works.fromWork)
		}
	}
};
</script>
