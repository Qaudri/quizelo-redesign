<template>
  <div class="flex items-center justify-center container mx-auto py-6 h-screen">
    <div>

      <div class="flex justify-center">
        <img :src="require('@/assets/images/congratulations.svg')" width="65%" alt="">
      </div>

      <div class="flex justify-center">
        <div>
          <h1 class="my-6 font-bold text-6xl text-accent1-600">
            Congratulations!
          </h1>
          <p class="flex justify-center font-normal text-lg">You have completed the quiz!</p>
        </div>
      </div>

      <div class="flex justify-center w-full my-12">
        <div class="flex justify-evenly items-center w-full">

          <a href="/" class="font-medium text-lg mx-8 hover:text-accent1-600 ease-in-out duration-500">
          Back to home page
          </a>

          <button @click="emitViewResult"
           class="mx-8 text-white rounded-xl  font-medium text-lg bg-accent1-600 py-2 px-4 hover:text-accent1-600 hover:bg-transparent hover:border-accent1-600 
          border-transparent border-2 duration-500 ease-in-out">
            View your results
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    emitViewResults(){
      this.$emit("viewResults")
    }
  }
}
</script>

<style>
</style>