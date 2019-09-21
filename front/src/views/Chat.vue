<template>
   <v-container fluid grid-list-sm>
    <v-layout row wrap>
      <v-flex d-flex xs12 order-xs5>
        <v-layout column>
          <v-flex d-flex>
            <v-card color="blue-grey" dark tile flat>
              <v-card-text>111</v-card-text>
            </v-card>
          </v-flex>
          <v-flex d-flex>
            <v-card color="brown" dark tile flat>
              <v-card-text>2222</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs12 sm7>
        <v-layout row wrap>
          <v-flex d-flex>
            <v-card color="indigo lighten-2" dark tile flat>
              <v-card-text>333</v-card-text>
            </v-card>
          </v-flex>
          <v-flex d-flex>
            <v-layout row>
              <v-flex
                v-for="n in 2"
                :key="n"
                d-flex
              >
                <v-card
                  color="amber lighten-2"
                  tile
                  flat
                >
                  <v-card-text>444</v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs12 sm2 child-flex>
        <v-card color="orange lighten-2" tile flat>
          <v-card-text>555</v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm3>
        <v-card color="red lighten-2" dark tile flat>
          <v-card-text>666</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
	<!--
	<v-container fluid>
	    <v-row v-for="i in layout">
	       	<v-col cols="3" v-for="j in i" fill-height="true">
	       		<v-card v-if="j==='toolbar'">
	       			<v-toolbar color="blue"  src="https://picsum.photos/1920/1080?random">
	       				<v-toolbar-title>요청한 일</v-toolbar-title>
	       			</v-toolbar>
	       			<v-list>
	       				<v-list-item>test</v-list-item>
	       				<v-list-item>test</v-list-item>
	       				<v-list-item>test</v-list-item>
	       				<v-list-item>test</v-list-item>
	       			</v-list>
	       		</v-card>
	       		<List v-if="j==='list'" />
	       	</v-col>
	  	</v-row>
	  	<v-row>
	  		<v-col align="end" cols="3">
	  			<Chat />
	  		</v-col>
	  	</v-row>
	  	<v-row>
	  		<v-col align="end" cols="12">
	  			<Bar />
	  		</v-col>
	  	</v-row>
	</v-container>

	-->

</template>
<script>
import Chat from '../../node_modules/basic-vue-chat/src/components/basic-vue-chat/BasicVueChat.vue'
import Bar from './Bar.vue'
import List from './List.vue'
import io from 'socket.io-client'
export default{
	name: 'App',
	components: {
		Chat,
		List,
		Bar
	},
	data: function (){
		return {
			message: {},
			test : '',
			layout: [
	          ['toolbar', 1, 1, 'list'],
	          [0, 0, 0, 0],
        	],
        	lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
		}
	},
	sockets: {
	    connect: function() {
		    console.log('socket connected')

		   	this.$socket.on('test', function(data){
		    	console.log('Chat.vue::from server: ' + data)
	 		})
	 		console.log(this.$socket)
		}
	},
	created(){
		this.socket = io('webhacker.xyz:8082')
	},
  	customEmit: function(val) {
    	console.log('this method was fired by the socket server. eg:')
   	},
   	mounted(){
   		this.socket.on('test', data =>{
   			console.log('from server:', data)
   		})
   	},
	methods: {
		testServ: function(){
			
			console.log('Testing server')
			console.log('socket:', this.$socket)
			this.$socket.emit('sendMsg', 'Do you know GangNam Style?')
			this.$socket.on('msg', function(data){
				console.log('from server: ' + data)
			})
			
		}
	}
};
</script>
