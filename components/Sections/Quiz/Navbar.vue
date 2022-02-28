<template>
  <div class="flex justify-between w-full">
    <div class="flex bg-accent3-300 p-2 hover:bg-transparent hover:border-accent3-400 hover:border-2">
      <img :src="require('@/assets/images/backward.svg')" alt="" class="mr-2" />
      <p class="font-medium text-accent3-600 mt-1">Previous</p>
    </div>

    <div><img :src="require('@/assets/images/clock.svg')" alt="">
    </div>

    <div class="flex">
      <div class="flex bg-accent1-600 p-2 hover:bg-transparent hover:border-accent1-600 hover:border-2">
        <p class="font-medium text-white mr-2 hover:text-accent1-600">Next</p>
        <img :src="require('@/assets/images/forward.svg')" alt="">
      </div>

      <div class="flex mx-2 p-2">
        <p class="font-medium text-accent1-600 mr-2">Skip</p>
        <img :src="require('@/assets/images/fast-forward.svg')" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>