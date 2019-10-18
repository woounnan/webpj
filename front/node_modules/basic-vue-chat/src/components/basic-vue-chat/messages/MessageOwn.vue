<template>
  <div
    class="message--own">
    <div class="message__date">
      {{ date }}
    </div>
    <div class="message__contents">
      <div v-if="convs.works">
        <WorkCard :convs="convs" />
      </div>
      <div v-else>
        <img
          v-if="imageUrl"
          :src="imageUrl"
          alt=""
          style="width: 100%" >
        {{ contents }}
      </div>
    </div>
  </div>
</template>

<script>
import { Emoji } from 'emoji-mart-vue'
import WorkCard from './WorkCard.vue'

export default {
  name: 'MessageOwn',
  components: {
    Emoji,
    WorkCard
  },
  props: {
    date: {
      type: String,
      default: '16:30:00',
      required: false
    },
    imageUrl: {
      type: String,
      default: '',
      required: false
    },
    contents: {
      type: String,
      default: '',
      required: false
    },
    convs: {
    }
  },
  methods: {
  }
}
</script>

<style>

</style>
