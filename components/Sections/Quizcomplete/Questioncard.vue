<template>
  <div class=" mx-auto">
  <div class="">

    <div class="bg-accent1-300 bg-opacity-20 p-6 w-screen mx-auto">
      <SectionsQuizQuestion :question="question.question"/>
    </div>

    </div>
    
    <div class="px-6 md:px-0 container mx-auto my-20">
      <SectionsQuizAnswer :answers="question.options" />
    </div>

  </div>
</template>

<script>
import {mapGetters} from 'vuex';


export default {

  computed: {
    ...mapGetters({
      question : 'quiz/getQuizQuestion'
    })
  }
}
</script>

<style>

</style>