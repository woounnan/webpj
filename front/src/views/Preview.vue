<template>
	<v-container>
		<v-row>
			<v-col cols="5">
				<v-card
			    max-width="500"
			    class="mx-auto"
			  	>
				    <v-card-title>I'm a title</v-card-title>
				    <v-card-text>I'm card text</v-card-text>
				    <v-card-actions>
				      <v-btn text>Click</v-btn>
				    </v-card-actions>
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