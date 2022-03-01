<template>
  <div >
    <FaqQuestion @questionClicked="toggleAnswer" >
      {{question}}
    </FaqQuestion>

    <FaqAnswer :class="answerRevealed ? 'block' : 'hidden'">
      {{answer}}
    </FaqAnswer>
  </div>
</template>

<script>



export default {

  props:{
    question: String,
    answer: String
  },


  data(){
    return{
      answerRevealed: false,
    }
  },

  methods: {
    toggleAnswer(){
      this.answerRevealed = !this.answerRevealed
    }
  },

  // computed: {
  //   ...mapGetters({
  //     faqItems : 'faqs/getFaqItems'
  //   })
  // }

}
</script>

<style>

</style>