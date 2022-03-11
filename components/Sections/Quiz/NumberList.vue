<template>
  <div>
    <div v-for="numberItem in 5" :key="numberItem"
    class=" mx-4 h-10 w-10 rounded-full flex items-center justify-center bg-white border-2 border-accent1-600 text-black font-medium">
      {{numberItem}}
    </div>
  </div>
</template>

<script>

import {mapGetters} from 'vuex';


export default {
  props: {
    numberItem: Number
  },

  computed: {
    ...mapGetters({
      question : 'quiz/getQuestion',
      question2 : 'quiz/getQuestion'

    })
  },

}
</script>

<style>

</style>