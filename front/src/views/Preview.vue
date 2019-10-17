<template>
	<v-card
		class="mx-auto"
	>
		<v-toolbar
			color="deep-purple accent-2"
			dark
		>
			<v-toolbar-title>
				처리할일
				<v-icon :color="$store.state.user.active ? 'deep-purple accent-4' : 'grey'">work</v-icon>
			</v-toolbar-title>
		</v-toolbar>
		<v-card-actions>
			<v-btn text>더보기</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
	export default {
		data(){
			return {
				test: 'Hi!! Im Preview.vue'
			}
		}
	}
</script>