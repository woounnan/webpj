<template>
	<v-container >
	<v-row >
	<v-col cols="6">
		  <v-card
		    max-width="500"
		    class="mx-auto"
		  >
	     <v-app-bar
        color="deep-purple accent-4"
        dense
        dark
      >진행중</v-app-bar>
	      <div class="flex-grow-1"></div>

	      <v-btn icon>
	        <v-icon>mdi-magnify</v-icon>
	      </v-btn>

	      <v-btn icon>
	        <v-icon>mdi-checkbox-marked-circle</v-icon>
	      </v-btn>
	    </v-toolbar>

	    <v-list 
          two-line 
          class="overflow-y-auto"  
          style="max-height: 500px" 
        >
	        <template v-for="(item, index) in goings">
	          <v-list-item :key="item.title">
             

              <v-dialog
                v-model="viewWork"
                transition="dialog-bottom-transition"
              >
              <template 
                v-slot:activator="{ on}"
              >  
	              <v-list-item-content v-on="on" @click="sendWork(item)">

	                <v-list-item-title>

                 <v-chip
                  class="ma-2"
                  color="primary"
                  v-for="one in item.to"
                >
                  {{one}}
                </v-chip>
                </v-list-item-title>
  	                <v-list-item-subtitle class="text--primary" >{{item.title}}</v-list-item-subtitle>
	                <v-list-item-subtitle v-text="item.contents"></v-list-item-subtitle>
	              </v-list-item-content>
              </template>
              <!--<ViewWork :works="thisWork"/>-->
               <v-card>
        <v-card-title>
          <span class="headline">Use Google's location service?</span>
        </v-card-title>
        <v-card-text>Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit. Nostra urna at, magna at neque sed sed ante imperdiet, dolor mauris cursus velit, velit non, sem nec. Volutpat sem ridiculus placerat leo, augue in, duis erat proin condimentum in a eget, sed fermentum sed vestibulum varius ac, vestibulum volutpat orci ut elit eget tortor. Ultrices nascetur nulla gravida ante arcu. Pharetra rhoncus morbi ipsum, nunc tempor debitis, ipsum pellentesque, vitae id quam ut mauris dui tempor, aptent non. Quisque turpis. Phasellus quis lectus luctus orci eget rhoncus. Amet donec vestibulum mattis commodo, nulla aliquet, nibh praesent, elementum nulla. Sit lacus pharetra tempus magna neque pellentesque, nulla vel erat.
          Justo ex quisque nulla accusamus venenatis, sed quis. Nibh phasellus gravida metus in, fusce aenean ut erat commodo eros. Ut turpis, dui integer, nonummy pede placeat nec in sit leo. Faucibus porttitor illo taciti odio, amet viverra scelerisque quis quis et tortor, curabitur morbi a. Enim tempor at, rutrum elit condimentum, amet rutrum vitae tempor torquent nunc. Praesent vestibulum integer maxime felis. Neque aenean quia vitae nostra, tempus elit enim id dui, at egestas pulvinar. Integer libero vestibulum, quis blandit scelerisque mattis fermentum nulla, tortor donec vestibulum dolor amet eget, elit nullam. Aliquam leo phasellus aliquam curabitur metus a, nulla justo mattis duis interdum vel, mollis vitae et id, vestibulum erat ridiculus sit pulvinar justo sed. Vehicula convallis, et nulla wisi, amet vestibulum risus, quam ac egestas.
          Et vitae, nulla gravida erat scelerisque nullam nunc pellentesque, a dictumst cras augue, purus imperdiet non. Varius montes cursus varius vel tortor, nec leo a qui, magni cras, velit vel consectetuer lobortis vel. Nibh erat et wisi felis leo porttitor, sapien nibh sapien pede mi, sed eget porttitor, repellendus arcu ac quis. Luctus vulputate aut est sem magna, placerat accumsan nunc vestibulum ipsum ac auctor, maecenas lorem in ut nec mauris tortor, doloribus varius sem tortor vestibulum mollis, eleifend tortor felis tempus lacus eu eu. Eleifend vel eu, nullam maecenas mauris nec nunc euismod, tortor porta ridiculus potenti, massa tristique nam magna, et wisi placerat et erat ante. Eget pede erat in facilisis, fermentum venenatis sodales. Ac tortor sociis et non animi tristique, rhoncus malesuada, ut arcu volutpat scelerisque sollicitudin, elit curabitur dui pede purus dolor, integer aenean risus taciti nulla eleifend accumsan. At pulvinar diam parturient, interdum mi velit aliquet et a. Arcu at ac placerat eget justo semper, purus sociis curabitur mi ipsum consequat ut, mollis vestibulum, est ante ornare lacus sem. Neque magna mauris, commodo quisque, praesent semper suscipit lobortis nam. Justo malesuada cursus ac nunc litora nunc. Tellus ac, in lobortis nunc, montes lectus purus fermentum.
          Ac sit wisi. Sodales aliquam, sed vestibulum nullam arcu sit risus arcu, id luctus vitae lorem nibh, integer nec nullam class cursus mi, purus arcu lectus. Vel ante suscipit volutpat potenti mattis sed, wisi eu placerat aliquam erat, lectus morbi lobortis at assumenda. Consequat neque purus ipsum voluptas odio, netus vestibulum ut nec, suspendisse pellentesque nec enim in. Wisi dictum sed semper a, ipsum erat tellus habitasse est, erat sem ornare, vitae quisque ultricies. Dui sed blandit. Tempor et faucibus justo sed luctus, nec vitae vitae. Nunc nibh pede, ipsum vestibulum aenean leo ante ultricies, nam cras quis sed penatibus amet. In mauris a. Integer metus mauris tortor, et rutrum vestibulum ultricies, ut phasellus in ullamcorper ut mollit, eu justo. Cursus pretium venenatis.
          Cras pellentesque vel sodales accumsan aenean. Feugiat metus sit nec in aliquet amet, porttitor pretium vulputate massa. Consequat ipsum luctus quisque adipiscing libero. Wisi sollicitudin. Eget vitae ac lobortis, lorem natoque vestibulum et, aliquet faucibus at morbi nibh, vel condimentum. Massa unde orci sed id sed, odio donec congue nec praesent amet. Hymenaeos velit lacus, quis vivamus libero tempus duis, eu nisi eu, ipsum at accumsan pede justo morbi donec, massa et libero sit risus neque tortor. Ut sed sed etiam hendrerit dapibus, quis metus suspendisse nibh.
          Fringilla tempor felis augue magna. Cum arcu a, id vitae. Pellentesque pharetra in cras sociis adipiscing est. Nibh nec mattis at maecenas, nisl orci aliquam nulla justo egestas venenatis, elementum duis vel porta eros, massa vitae, eligendi imperdiet amet. Nec neque luctus suscipit, justo sem praesent, ut nisl quisque, volutpat torquent wisi tellus aliquam reprehenderit, curabitur cras at quis massa porttitor mauris. Eros sed ultrices. Amet dignissim justo urna feugiat mauris litora, etiam accumsan, lobortis a orci suspendisse. Semper ac mauris, varius bibendum pretium, orci urna nunc ullamcorper auctor, saepe sem integer quam, at feugiat egestas duis. Urna ligula ante. Leo elementum nonummy. Sagittis mauris est in ipsum, nulla amet non justo, proin id potenti platea posuere sit ut, nunc sit erat bibendum. Nibh id auctor, ab nulla vivamus ultrices, posuere morbi nunc tellus gravida vivamus.
          Mauris nec, facilisi quam fermentum, ut mauris integer, orci tellus tempus diam ut in pellentesque. Wisi faucibus tempor et odio leo diam, eleifend quis integer curabitur sit scelerisque ac, mauris consequat luctus quam penatibus fringilla dis, vitae lacus in, est eu ac tempus. Consectetuer amet ipsum amet dui, sed blandit id sed. Tellus integer, dignissim id pede sodales quis, felis dolorem id mauris orci, orci tempus ut. Nullam hymenaeos. Curabitur in a, tortor ut praesent placerat tincidunt interdum, ac dignissim metus nonummy hendrerit wisi, etiam ut.
          Semper praesent integer fusce, tortor suspendisse, augue ligula orci ante asperiores ullamcorper. In sit per mi sed sed, mi vestibulum mus nam, morbi mauris neque vitae aliquam proin senectus. Ac amet arcu mollis ante congue elementum, inceptos eget optio quam pellentesque quis lobortis, sollicitudin sed vestibulum sollicitudin, lectus parturient nullam, leo orci ligula ultrices. At tincidunt enim, suspendisse est sit sem ac. Amet tellus molestie est purus magna augue, non etiam et in wisi id. Non commodo, metus lorem facilisi lobortis ac velit, montes neque sed risus consectetuer fringilla dolor. Quam justo et integer aliquam, cursus nulla enim orci, nam cursus adipiscing, integer torquent non, fringilla per maecenas. Libero ipsum sed tellus purus et. Duis molestie placerat erat donec ut. Dolor enim erat massa faucibus ultrices in, ante ultricies orci lacus, libero consectetuer mauris magna feugiat neque dapibus, donec pretium et. Aptent dui, aliquam et et amet nostra ligula.
          Augue curabitur duis dui volutpat, tempus sed ut pede donec. Interdum luctus, lectus nulla aenean elit, id sit magna, vulputate ultrices pellentesque vel id fermentum morbi. Tortor et. Adipiscing augue lorem cum non lacus, rutrum sodales laoreet duis tortor, modi placerat facilisis et malesuada eros ipsum, vehicula tempus. Ac vivamus amet non aliquam venenatis lectus, sociosqu adipiscing consequat nec arcu odio. Blandit orci nec nec, posuere in pretium, enim ut, consectetuer nullam urna, risus vel. Nullam odio vehicula massa sed, etiam sociis mauris, lacus ullamcorper, libero imperdiet non sodales placerat justo vehicula. Nec morbi imperdiet. Fermentum sem libero iaculis bibendum et eros, eget maecenas non nunc, ad pellentesque. Ut nec diam elementum interdum. Elementum vitae tellus lacus vitae, ipsum phasellus, corporis vehicula in ac sed massa vivamus, rutrum elit, ultricies metus volutpat.
          Semper wisi et, sollicitudin nunc vestibulum, cursus accumsan nunc pede tempus mi ipsum, ligula sed. Non condimentum ac dolor sit. Mollis eu aliquam, vel mattis mollis massa ut dolor ante, tempus lacinia arcu. Urna vestibulum lorem, nulla fermentum, iaculis ut congue ac vivamus. Nam libero orci, pulvinar nulla, enim pellentesque consectetuer leo, feugiat rhoncus rhoncus vel. Magna sociosqu donec, dictum cursus ullamcorper viverra. Ultricies quis orci lorem, suspendisse ut vestibulum integer, purus sed lorem pulvinar habitasse turpis.
          +</v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>
          <v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>
        </v-card-actions>
      </v-card>
            </v-dialog>
	              <v-list-item-action>
	                <v-list-item-action-text v-text="item.due"></v-list-item-action-text>
	                <v-icon
                    @click=""
	                  v-if="!active"
	                  color="grey lighten-1"
	                >
	                  star_border
	                </v-icon>

	                <v-icon
	                  v-else
	                  color="yellow"
	                >
	                  star
	                </v-icon>
	              </v-list-item-action>
	          </v-list-item>

	          <v-divider
	            v-if="index + 1 < goings.length"
	            :key="index"
	          ></v-divider>
	        </template>
	    </v-list>
	  </v-card>

	</v-col>
    <v-col cols="6">
      <v-card
        max-width="500"
        class="mx-auto"
      >
        <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >지나간</v-app-bar>
        <div class="flex-grow-1"></div>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-checkbox-marked-circle</v-icon>
        </v-btn>
      </v-toolbar>

      <v-list 
          two-line
          style="max-height: 500px"
          class="overflow-y-auto">
        <v-list-item-group
          v-model="selected"
          multiple
          active-class="pink--text"
        >
          <template v-for="(item, index) in goings">
            <v-list-item :key="item.title">
              <template v-slot:default="{ active, toggle }">
                <v-list-item-content>

                  <v-list-item-title>

                 <v-chip
                  class="ma-2"
                  color="primary"
                  v-for="one in item.to"
                >
                  {{one}}
                </v-chip>
                </v-list-item-title>
                    <v-list-item-subtitle class="text--primary" >{{item.title}}</v-list-item-subtitle>
                  <v-list-item-subtitle v-text="item.contents"></v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                  <v-list-item-action-text v-text="item.due"></v-list-item-action-text>
                  <v-icon
                    v-if="!active"
                    color="grey lighten-1"
                  >
                    star_border
                  </v-icon>

                  <v-icon
                    v-else
                    color="yellow"
                  >
                    star
                  </v-icon>
                </v-list-item-action>
            </template> 
            </v-list-item>

            <v-divider
              v-if="index + 1 < goings.length"
              :key="index"
            ></v-divider>
          </template>
        </v-list-item-group>
      </v-list>
    </v-card>

  </v-col>

</v-row>
</v-container>

</template>
<script>
  import ViewWork from './ViewWork.vue'
	import Vue from 'vue'
  export default {
    components:{
      ViewWork
    },
  	props:{
      idx_work: undefined,
      idx_sep: undefined,
  	},
    data: () => ({
      thisWork: undefined,
      viewWork: false,
      selected: [2],
      goings: [
      /*
        {
          action: '15 min',
          headline: 'Brunch this weekend?',
          title: 'Ali Connors',
          subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        },
        */
      ],
    }),
    created(){
      this.$store.state.bus.$on('closeViewWork', ()=>{
        this.viewWork = false
      })
      console.log('idx_sep::::', this.idx_sep)
      this.setItems(this.idx_sep)
      setInterval(this.setItems(this.idx_sep),1000*60)
    	this.$store.state.bus.$on('setList', data => {		
      console.log('receive setList idx_sep::::', data.idx_sep)
      this.setItems(data.idx_sep)
    	})
    },
    methods: {
      sendWork(works){
        console.log('call sendWork::::', works)
        this.thisWork = works
        //this.$store.state.bus.$emit('sendWork', idx)
      },
      nav(idx){
        console.log('call nav::::', idx)
      },
      setTime(works){
        console.log('@@@@@@@call sepItem::::', works)
        console.log('왜안돼!!!!!!!!!!!!!!!:::', works.length)
        for(var i = 0; i< works.length; i++){
          console.log('x:::::', works[i])
          
          var sp = works[i].convs.works.endDate.split['-']
          console.log('endDate::::', sp)
          var v_y = sp[0]
          var v_m = sp[1]
          var v_d = sp[2]
          var cur = new Date();
          var end = new Date(v_y, v_m, v_d); 
          console.log((second.getTime())/1000); 
          diff= second - first ;
          one_hour= 60*60 ;
          console.log('diff hours::::',diff/one_hour)
          works[i].due = diff/one_hour
          
        }
      },
      setItems(idx){
        console.log('call setItems:::')
        switch(idx){
          case 0:
            this.goings = this.$store.getters.getUser.works.toWork
            break
          case 1:
            this.goings = this.$store.getters.getUser.works.fromWork
            break
          case 2:
            this.goings = this.$store.getters.getUser.works.toNotice
            break
          case 3:
            this.goings = this.$store.getters.getUser.works.fromNotice
            break
        }
        //set due time
        this.setTime(this.goings)
      }
    },
  }
</script>