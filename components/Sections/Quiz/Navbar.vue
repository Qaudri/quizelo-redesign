<template>
  <div class="select-none flex justify-between w-full items-center">
    
    <div @click="emitPreviousEvent"
     class="cursor-pointer flex items-center mt-2 bg-accent3-300 py-2 px-4 ease-in-out duration-500 hover:bg-transparent border-transparent hover:border-accent3-400 border-2">
      <img :src="require('@/assets/images/backward.svg')" alt="" class="mr-2" />
      <p class="font-medium text-accent3-600">Previous</p>
    </div>

    <div class="flex items-center justify-center">
      <img :src="require('@/assets/images/clock.svg')" class="w-12" alt="">

      <div class="cursor-pointer absolute font-medium text-black">
        {{countDown}}
      </div>

    </div>

    <div @click="emitNextEvent" class="flex">

      <div class="cursor-pointer group">

        <div class="flex items-center bg-accent1-600 py-2 ease-in-out duration-500 px-4 group-hover:bg-transparent border-transparent group-hover:border-accent1-600 border-2 ">

          <p class="font-medium text-white mr-2 group-hover:text-accent1-600">Next</p>

          <div class="group-hover:hidden mt-1">
            <img :src="require('@/assets/images/forward.svg')" alt="" width="8px" class="">
          </div>

          <div class="group-hover:block hidden mt-1">
            <img :src="require('@/assets/images/forward-orange.svg')" alt="" width="8px" class="">
          </div>
        </div>

      </div>


      <div class="cursor-pointer mx-2 p-2 items-center hidden md:flex">
        <p class="font-medium text-accent1-600 mr-2">Skip</p>
        <img :src="require('@/assets/images/fast-forward.svg')" class="mt-1" alt="" width="12px">
      </div> 
    </div>
  </div>
</template>

<script>
export default {

  methods: {
    emitNextEvent(){
      this.$emit("NextQuestion")
    },

    emitPreviousEvent(){
      this.$emit("PreviousQuestion")
    }
  }
}
</script>

<style>

</style>