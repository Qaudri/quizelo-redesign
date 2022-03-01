<template>
  <div class="container mx-auto">
    <SectionsCommonHeader />

    <div class="flex items-center justify-center">

      <div >
        <div class="my-10">
          <h1 class="text-4xl md:text-6xl font-bold text-center">FAQs</h1>
          <p class="text-gray-400 text-center font-normal md:text-base text-sm">Frequently Asked Questions.</p>
        </div>
      </div>

    </div>

    <div class="grid md:grid-cols-2 gap-6">
      <UiCardsFaqcard />
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      answerRevealed: false
    }
  },

  methods: {
    toggleAnswer(){
      this.answerRevealed = !this.answerRevealed
    }
  }
}
</script>

<style>

</style>