<template>
	<v-container>
		<v-row>
			<v-col cols="5">
				<v-card
			    max-width="500"
			    class="mx-auto"
			  	>
		<!--
			<v-icon :color="$store.state.user.active ? 'deep-purple accent-4' : 'grey'">work</v-icon>
          	<v-icon :color="$store.state.user.active ? 'deep-purple accent-4' : 'grey'">notification_important</v-icon> 
          	<v-icon :color="$store.state.user.active ? 'deep-purple accent-4' : 'grey'">chat_bubble</v-icon>
        -->
				    <v-card-title color="skyblue">
				    	처리할일
				    	<v-icon :color="$store.state.user.active ? 'deep-purple accent-4' : 'grey'">work</v-icon>
				    </v-card-title>
				    <v-card-text>I'm card text</v-card-text>
				    <v-card-actions>
				      <v-btn text>더보기</v-btn>
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