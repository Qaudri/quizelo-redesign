<template>
  <div>
    <div class="flex justify-between">

      <div class="w-10">
        <img v-if="is_user_option_correct" :src="require('@/assets/images/correct.svg')" alt="">
        <img v-else :src="require('@/assets/images/wrong.svg')" alt="">
      </div>

      <div class="font-medium text-black text-lg mx-4">
        {{theQuestion}}
      </div>
    </div>

    <div>
      <div>
        <p class="text-black font-medium text-lg">Correct option: <span class="text-black font-normal text-lg">This is the correct option </span></p>
      </div>

      <div>
        <p class="text-black font-medium text-lg">You choosed: <span class="text-black font-normal text-lg">This is what you choosed </span></p>
      </div>
  </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';


export default {

  props: {
    theQuestion: Array
  },

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