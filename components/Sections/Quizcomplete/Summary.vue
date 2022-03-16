<template>
  <div class="bg-white mt-3 px-6 py-3 flex justify-between">
    <div class="flex items-center w-1/2">

      <div class="w-10 mr-3">
        <img v-if="is_correct" :src="require('@/assets/images/correct.svg')" alt="">
        <img v-else :src="require('@/assets/images/wrong.svg')" alt="">
      </div>

      <div class="font-medium text-black text-lg">
        {{theQuestion}}
      </div>
    </div>

    <div>
      <div>
        <div class="text-black font-medium text-lg">Correct option: <span class="text-black font-normal text-lg"> {{correct_option}} </span> </div>
      </div>

      <div>
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