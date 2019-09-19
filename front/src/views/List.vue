<template>
  <v-row
    class="d-flex"
    justify="center"
  >
    <v-menu
      v-model="showMenu"
      absolute
      offset-y
      style="max-width: 600px"
    >
      <template v-slot:activator="{ on }">
        <Users v-on="on"/>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in sub"
          :key="index"
          @click=""
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-row>
</template>

<script>
import Users from './Users.vue'
export default {
    components: {
      Users
    },
    data: () => ({
      showMenu: false,
      sub: [
        '대화하기',
        '작업 확인',
        '상태'
      ]
    }),
}
</script>
