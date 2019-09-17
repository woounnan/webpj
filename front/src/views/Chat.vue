<template>
	<basic-vue-chat />

	<v-textfield 
		placeholder = "Test"
	>
	</v-textfield>
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
			message: {}
		}
	}
};
</script>
