<template>
  <div class="bg-white mt-3 px-6 py-3 md:flex justify-between items-center">
    <div class="flex items-center">

      <div class="w-1/12 md:w-10 mr-3 p-0">
        <img v-if="is_correct" :src="require('@/assets/images/correct.svg')" alt="">
        <img v-else :src="require('@/assets/images/wrong.svg')" alt="">
      </div>

      <div class="w-11/12 md:w-full font-medium text-black text-lg">
        {{theQuestion}}
      </div>
    </div>

    <div class="mt-4 md:mt-0">
      <div class="px-4 py-2 border">
        <div class="text-black font-medium text-lg">Correct option: <span class="text-black font-normal text-lg"> {{correct_option}} </span> </div>
      </div>

      <div class="px-4 py-2 border">
        <div class="text-black font-medium text-lg">You choosed: <span class="text-black font-normal text-lg"> {{choosen_option}} </span> </div>
      </div>
  </div>
  </div>
</template>

<script>


export default {

  props: {
    theQuestion: String,
    correct_option: String,
    choosen_option: String,
    is_correct: Boolean,
  },

}
</script>

<style>

</style>