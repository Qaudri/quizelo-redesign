<template>
  <div class="cursor-pointer grid grid-cols-2 gap-8 md:gap-x-36 justify-evenly" >
    <div v-for="(answer, index) in answers" :key="index" class="group bg-accent3-200 relative hover:bg-accent1-600 rounded-2xl px-14 py-10">
        <p class="text-accent3-400 font-medium text-sm absolute top-3 left-4 group-hover:text-white">{{answer.option_tag}}</p>
        <h1 class="text-accent3-700 font-medium text-md md:text-xl md:px-8 group-hover:text-white uppercase">{{answer.option_text}}</h1>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    tag: String,
    answers: Array, 

  }
}
</script>

<style>

</style>