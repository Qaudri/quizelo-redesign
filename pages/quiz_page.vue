<template >
  <div class="">  

    <div class="container mx-auto ">
      <SectionsQuizHeader class="" @ModalDialog="openDialog" />
    </div>

    <SectionsQuizDialog @ConfirmSubmit="submitQuiz"
    :class="dialog_open ? 'block z-150 top-0' : 'hidden' " @closeDialog="closeDialog"/>

    <div class="w-full flex justify-center items-center">
      <div class=""> 

        <SectionsQuizQuestionselector @changeQuestion="switchQuestion" 
         :question_no="questionNo" class="w-full container mx-auto overflow-x-hidden flex justify-center my-6" />

        <div class="bg-accent1-300 bg-opacity-20 p-6 w-screen mx-auto">
          <SectionsQuizQuestion :question="question.question"  />
        </div>

        <div class="px-6 md:px-0 grid grid-cols-2 container mx-auto gap-4 md:gap-6 mt-8 md:mt-14">
          <SectionsQuizAnswer2  @OptionChosen="userChooseOption(answer)" v-for="answer in question.options" :key="answer.option_id"
          :selected="answer.selected" :option_text="answer.option_text" :option_tag="answer.option_tag" />
        </div>

      </div>

    </div>
    
    <div class="container mx-auto">

      <div class="mb-4 w-full absolute bottom-0 px-8 md:px-0 flex justify-between container mx-auto">
        <SectionsQuizNavbar @timeOver="showNextQuestion"
        @PreviousQuestion="showPreviousQuestion" @NextQuestion="showNextQuestion" />
      </div>

    </div>
  </div>
</template>

<script>

import {mapGetters, mapActions} from 'vuex';


export default {

  data(){
    return{
      dialog_open: false,
      navigation_text: ''
    }
  },

  computed: {
    ...mapGetters({
      question : 'quiz/getQuestion',
      question2 : 'quiz/getQuestion',
      questionNo: 'quiz/getOverallQuestionNo'

    })
  },

  methods: {
    ...mapActions({
      retrieveQuestionItem: 'quiz/retrieveFirstQuestion',
      retrieveNextQuestion: 'quiz/retrieveNextQuestion',
      retrievePreviousQuestion: 'quiz/retrievePreviousQuestion',
      chooseOption: 'quiz/chooseOption',
      evaluateQuiz: 'quiz/evaluateQuiz',
      retrieveQuestionByNumber: 'quiz/retrieveQuestionByNumber'


    }),

    showNextQuestion(){
      this.navigation_text = "next"
      this.retrieveNextQuestion()
    },

    showPreviousQuestion(){
      this.navigation_text = "previous"
      this.retrievePreviousQuestion()
    },

    userChooseOption(user_selected_option){
      
      this.chooseOption({
        question: this.question,
        selected_option: user_selected_option,
      })

    },

    openDialog(){
      this.dialog_open = true
    },

    closeDialog(){
      this.dialog_open = false
    },

    submitQuiz(){
      this.evaluateQuiz();
      this.$router.push({name:'summary'})
    },

    switchQuestion(item){
      this.retrieveQuestionByNumber(item)
    }
  },

  created(){
    this.retrieveQuestionItem()
  }
}

</script>
<style>
</style>