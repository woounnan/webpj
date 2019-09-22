<template>
	<v-system-bar dark color="indigo darken-2">
		<v-menu
	      v-model="showMenu"
	      absolute
	      offset-y
	    >
		    <template v-slot:activator="{ on }">
				<v-btn v-on="on" height="20px">
					<v-icon>mdi-message</v-icon>
					양세형
				</v-btn>
			</template>
			<Chat />
		</v-menu>
		<div class="flex-grow-1"></div>
		<v-icon>mdi-wifi-strength-4</v-icon>
		<v-icon>mdi-signal-cellular-outline</v-icon>
		<v-icon>mdi-battery</v-icon>
		<span>12:30</span>
	</v-system-bar>
</template>

<script>
	import Chat from '../../node_modules/basic-vue-chat/src/components/basic-vue-chat/BasicVueChat.vue'
  	export default {
	    components: {
	      Chat
	    },
	    data: () => {
	    	return {
	    		showMes
	    	}
	  	}
	}
</script>