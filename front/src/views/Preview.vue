<template>
	<v-container>
		<v-row>
			<v-col cols="5">
				<v-card>
					{{test}}
				</v-card>
			</v-col>
			<v-col cols="5">
				<v-card>
					111
				</v-card>
			</v-col>
			<v-col cols="5">
				<v-card>
					111
				</v-card>
			</v-col>
		</v-row>
		<v-row row wrap>
			<v-col cols="5">
				<v-card>
					222
				</v-card>
			</v-col>
			<v-col cols="4">
				<v-card>
					333
				</v-card>
			</v-col>
			<v-col cols="4">
				<v-card>
					555
				</v-card>
			</v-col>
		</v-row>
	</v-container>
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