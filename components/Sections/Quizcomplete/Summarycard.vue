<template>
  <div class=" mx-auto">
    <div class="my-10 flex justify-center">
      <div>
        <h1 class="font-bold text-6xl text-accent1-600">You scored {{score}}</h1>
        <p class="text-black font-medium text-lg text-center my-2">Here's the full breakdown</p>
      </div>
    </div>
    <div class="my-6">
      <div class="">

        <div class="bg-accent1-300 bg-opacity-20 p-6 w-screen mx-auto">
          <SectionsQuizQuestion :question="question.question"  />
        </div>

      </div>
      
      <div class="px-6 md:px-0 container mx-auto my-20">
        <SectionsQuizAnswer :answers="question.options" />
      </div>
    </div>

    <div class="my-6">
      <div class="">

        <div class="bg-accent1-300 bg-opacity-20 p-6 w-screen mx-auto">
          <SectionsQuizQuestion :question="question.question"  />
        </div>

      </div>
      
      <div class="px-6 md:px-0 container mx-auto my-20">
        <SectionsQuizAnswer :answers="question.options" />
      </div>
    </div>

    <div class="my-6">
      <div class="">

        <div class="bg-accent1-300 bg-opacity-20 p-6 w-screen mx-auto">
          <SectionsQuizQuestion :question="question.question"  />
        </div>

      </div>
      
      <div class="px-6 md:px-0 container mx-auto my-20">
        <SectionsQuizAnswer :answers="question.options" />
      </div>
    </div>

    <div class="my-6">
      <div class="">

        <div class="bg-accent1-300 bg-opacity-20 p-6 w-screen mx-auto">
          <SectionsQuizQuestion :question="question.question"  />
        </div>

      </div>
      
      <div class="px-6 md:px-0 container mx-auto my-20">
        <SectionsQuizAnswer :answers="question.options" />
      </div>
    </div>

    <div class="flex items-center mx-auto my-4">
      <a href="/" class="mx-auto py-2 px-4 bg-gradient-to-tr from-accent1-600 to-accent2-500 rounded-xl text-white text-lg font-medium">
      Back to home page
      </a>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';


export default {
  data(){
   return{
     score: "5/5"
   } 
  },

  computed: {
    ...mapGetters({
      question : 'quiz/getQuizQuestion'
    })
  },


}
</script>

<style>

</style>