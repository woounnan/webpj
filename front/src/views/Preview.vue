<template>
	<v-container>
		<v-row row wrap>
			<v-col cols="6">
		<!--
			<v-icon :color="$store.state.user.active ? 'deep-purple accent-4' : 'grey'">work</v-icon>
          	<v-icon :color="$store.state.user.active ? 'deep-purple accent-4' : 'grey'">notification_important</v-icon> 
          	<v-icon :color="$store.state.user.active ? 'deep-purple accent-4' : 'grey'">chat_bubble</v-icon>
        -->
        	
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
				    <v-card-text>I'm card text</v-card-text>
				    <v-card-actions>
				      <v-btn text>더보기</v-btn>
				    </v-card-actions>
			  	</v-card>
			</v-col>
			<v-col cols="6">
				<v-card
			    class="mx-auto"
			  	>
			  	<v-toolbar
				      color="deep-purple darken-4"
				      dark
				    >
				     <v-toolbar-title>
				    	요청한일
				    	<v-icon :color="$store.state.user.active ? 'deep-purple accent-4' : 'grey'">work</v-icon>
				    </v-toolbar-title>
				</v-toolbar>
				    <v-card-text>I'm card text</v-card-text>
				    <v-card-actions>
				      <v-btn text>더보기</v-btn>
				    </v-card-actions>
			  	</v-card>
			</v-col>
			<v-col cols="12">
				<v-card
			    class="mx-auto"
			  	>
			  		<v-toolbar
				      color="deep-purple accent-2"
				      dark
				    >
					     <v-toolbar-title>
					    	알림
				    	<v-icon :color="$store.state.user.active ? 'deep-purple accent-4' : 'grey'">notification_important</v-icon> 
					    </v-toolbar-title>
					</v-toolbar>
				    <v-card-text>I'm card text</v-card-text>
				    <v-card-actions>
				      <v-btn text>더보기</v-btn>
				    </v-card-actions>
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