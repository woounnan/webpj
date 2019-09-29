<template>
	<v-container>
	<v-system-bar dark color="indigo darken-2">
		<v-dialog v-model="dialog" scrollable max-width="300px">
		    <template v-slot:activator="{ on }">
		    	<v-row align="start" justify="start">

						<v-btn 
						v-for="(x, idx) in $store.state.user.room"
							class="md-5"
							v-on="on" 
							height="20px"
						>
							<v-icon>mdi-message</v-icon>
							{{x}}&nbsp;&nbsp;
						</v-btn>
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
	  	}
	}
</script>