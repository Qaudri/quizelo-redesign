<template>
  <section class="container mx-auto px-6 md:px-0">
    <div class="block md:flex justify-between items-center py-4 bg-white ">

      <div class="flex justify-between">
        <div >
          <img :src="require('@/assets/images/quizelo.svg')" class="w-32" />
        </div>

        <div id="menu-button" class="block md:hidden justify-end">
          <img :src="require('@/assets/images/menu.svg')" alt="" width="30px" />
        </div>

        <div id="close-button" class="hidden md:hidden">
          <img :src="require('@/assets/images/close_window.svg')" alt="" width="30px" />
        </div>
        
      </div>

      <div class="items-center md:flex hidden" id="menu-items">
        <a href="#" class="pb-2 px-6 md:p-0 my-6 md:my-0 md:mx-6 block border-b-2 md:border-none">
          How it works?
        </a>
  
        <a href="#" class="pb-2 px-6 md:p-0 my-6 md:my-0 md:mx-6 block border-b-2 md:border-none">
          Features
        </a>
  
        <a href="#" class="pb-2 px-6 md:p-0 my-6 md:my-0 md:mx-6 block border-b-2 md:border-none">
          About Us
        </a>
  
        <a href="#"
          class=" mx-6 cursor-pointer md:mx-8 border bg-gradient-to-r from-accent1-500 to-accent2-500  px-6 py-3 uppercase text-white rounded-lg font-medium">
          Login
        </a>
      </div>
  
    </div>
    <div class="md:border-b-2"></div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>