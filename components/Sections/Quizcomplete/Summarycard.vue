<template>
  <div class="container mx-auto">
    <div class="my-10 flex justify-center">
      <div>
        <h1 class="font-bold text-4xl text-black py-3">Quiz Summary</h1>
        <div class="py-4 border-b border-t">
          <h1 class="font-medium text-xl text-black flex justify-center">You scored</h1>
          <div class="font-bold text-6xl text-accent1-600 flex justify-center my-0" >{{finalScore}}/{{questionNo}} </div>
        </div>
        <p class="text-black font-medium text-lg text-center my-4">Here's the full breakdown</p>
      </div>
    </div>

    <div class="px-4 py-6 bg-accent3-200">
      <SectionsQuizcompleteSummary v-for="(quiz, index) in quizSummary" :key="index"
      :theQuestion="quiz.question" :is_correct="quiz.is_user_option_correct" 
      :correct_option="quiz.question_correct_value" :choosen_option="quiz.user_selected_option_value" />
    </div>

    <div class="flex items-center mx-auto my-4">
      <a href="/" class="mx-auto py-2 px-4 bg-gradient-to-r from-accent1-600 to-accent2-500 rounded-xl text-white text-lg font-medium">
      Back to home page
      </a>
    </div>
  </div>
</template>

<script>

import {mapGetters} from 'vuex';

export default {

  computed: {
    ...mapGetters({
      quizSummary: 'quiz/getQuizSummary',
      finalScore: 'quiz/getFinalScore',
      questionNo: 'quiz/getOverallQuestionNo'
    })
  },

}
</script>

<style>

</style>