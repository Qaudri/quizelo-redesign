<template >
  <div class="flex justify-center h-screen">      
    <div class="w-full my-20">
      <div class=""> 
        <div class="container mx-auto relative flex h-fit justify-center items-center mb-10 w-full h-1 bg-accent1-600">
          <SectionsQuizNumberlist class="w-full flex justify-between absolute" />
        </div>

        <div class="bg-accent1-300 bg-opacity-20 p-6 w-screen mx-auto">
          <SectionsQuizQuestion :question="question.question"  />
        </div>

      </div>
      
      <!-- <div class="px-6 md:px-0 container mx-auto mt-14">
        <SectionsQuizAnswer :answers="question.options" @OptionChosen="userChooseOption" />
      </div> -->

      <div class="px-6 md:px-0 grid grid-cols-2 container mx-auto gap-6 mt-14">
        <SectionsQuizAnswer2  @OptionChosen="userChooseOption(answer)" v-for="answer in question.options" :key="answer.option_id"
        :selected="answer.selected" :option_text="answer.option_text" :option_tag="answer.option_tag" />
      </div>
      
      <div class="container mx-auto">

        <div class="mb-4 w-full absolute bottom-0 px-14 md:px-0 flex justify-between container mx-auto">
          <SectionsQuizNavbar @timeOver="showNextQuestion"
          @PreviousQuestion="showPreviousQuestion" @NextQuestion="showNextQuestion" />
        </div>

      </div>
      
    </div>
      
  </div>
</template>

<script>

import {mapGetters, mapActions} from 'vuex';


export default {

  computed: {
    ...mapGetters({
      question : 'quiz/getQuestion',
      question2 : 'quiz/getQuestion'

    })
  },

  methods: {
    ...mapActions({
      retrieveQuestionItem: 'quiz/retrieveFirstQuestion',
      retrieveNextQuestion: 'quiz/retrieveNextQuestion',
      retrievePreviousQuestion: 'quiz/retrievePreviousQuestion',
      chooseOption: 'quiz/chooseOption'
    }),

    showNextQuestion(){
      this.retrieveNextQuestion()
    },

    showPreviousQuestion(){
      this.retrievePreviousQuestion()
    },

    userChooseOption(user_selected_option){
      console.log("Clicked")
      
      this.chooseOption({
        question: this.question,
        selected_option: user_selected_option,
      })
    }
  },

  created(){
    this.retrieveQuestionItem()
  }
}

</script>
<style>
body{
  position: relative;
  width: 100%;
  height: 100%;
}
</style>