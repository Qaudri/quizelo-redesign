<template >
  <div class="">  

    <div class="container mx-auto ">
      <SectionsQuizHeader class="" @ModalDialog="openDialog" />
    </div>

    <SectionsQuizSimple :class="dialog_open ? 'block z-150 top-0' : 'hidden' " @closeDialog="closeDialog"/>

    <div class="w-full flex justify-center items-center">
      <div class=""> 

        <SectionsQuizNumberlist class="w-full container mx-auto overflow-x-hidden flex justify-between my-6" />

        <div class="bg-accent1-300 bg-opacity-20 p-6 w-screen mx-auto">
          <SectionsQuizQuestion :question="question.question"  />
        </div>

        <div class="px-6 md:px-0 grid grid-cols-2 container mx-auto gap-6 mt-14">
          <SectionsQuizAnswer2  @OptionChosen="userChooseOption(answer)" v-for="answer in question.options" :key="answer.option_id"
          :selected="answer.selected" :option_text="answer.option_text" :option_tag="answer.option_tag" />
        </div>

      </div>

    </div>
    
    <div class="container mx-auto">

      <div class="mb-4 w-full absolute bottom-0 px-14 md:px-0 flex justify-between container mx-auto">
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
      dialog_open: false
    }
  },

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
    },

    openDialog(){
      this.dialog_open = true
    },

    closeDialog(){
      this.dialog_open = false
    }
  },

  created(){
    this.retrieveQuestionItem()
  }
}

</script>
<style>
body{
  /* position: relative; */
  width: 100%;
  height: 100%;
}
</style>