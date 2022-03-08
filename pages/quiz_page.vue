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
      
      <div class="px-6 md:px-0 container mx-auto mt-14">
        <SectionsQuizAnswer :answers="question.options" @OptionChosen="userChooseOption(index)" 
         />
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
      question : 'quiz/getQuizQuestion'
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

    userChooseOption(option){
      this.chooseOption(option)
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