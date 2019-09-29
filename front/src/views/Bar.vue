<template>
	<v-container>
	<v-system-bar dark color="indigo darken-2">
		<v-dialog v-model="dialog" scrollable max-width="300px">
		    <template v-slot:activator="{ on }">
		    	<v-row align="start" justify="start">

		    			<div
		    			v-for="(x, idx) in $store.state.user.room"
		    			>
						<v-btn 
							class="md-4"
							v-on="on" 
							height="20px"
						>
							<v-icon>mdi-message</v-icon>
							{{x}}&nbsp;
							<v-icon v-on="" @click="deleteRoom(idx)">close</v-icon>
						</v-btn>
						&nbsp;
					</div>
					</v-row>
			</template>
			<v-card>
				<Chat />
			</v-card>
		</v-dialog>
		<div class="flex-grow-1"></div>
		<v-icon>mdi-wifi-strength-4</v-icon>
		<v-icon>mdi-signal-cellular-outline</v-icon>
		<v-icon>mdi-battery</v-icon>
		<span>12:30</span>
	</v-system-bar>
</v-container>
</template>

<script>
	import Chat from '../../node_modules/basic-vue-chat/src/components/basic-vue-chat/BasicVueChat.vue'
  	export default {
	    components: {
	      Chat
	    },
	    data: () => {
	    	return {
	    	}
	  	},
	  	method:{
	  		deleteRoom(idx){
	  			this.$store.commit('closeRoom', idx)
	  		}
	  	}
	}
</script>