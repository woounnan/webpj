<template>
  <v-container class="grey lighten-5">
    <v-row
      v-for="n in layout"
      class="mb-6"
      no-gutters
    >
      <v-col
    v-for="m in n"        
    cols="m"
      >
        <v-card
          v-if="m"
          class="pa-2"
          tile
          outlined
        >
          col-{{ n === 1 ? 8 : 4 }}
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default{
    data (){
      return {
        layout: [
          [1, 0, 0, 4]
        ]
      }
    }
  }
</script>