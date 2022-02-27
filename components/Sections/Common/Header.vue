<template>
  <section class="container mx-auto px-6 md:px-0">
    <div class="block md:flex justify-between items-center py-4 bg-white ">

      <div class="flex justify-between">
        <div >
          <img  :src="require('@/assets/images/quizelo.svg')" class="w-32" />
        </div>

        <div class="block md:hidden justify-end">
          <img @click="toggleMenu" :class="is_menu_open ? 'hidden' : 'block' "
          :src="require('@/assets/images/menu.svg')" alt="" width="30px" />
        </div>

        <div :class="is_menu_open ? 'block' : 'hidden' " class="md:hidden">
          <img @click="toggleMenu" :src="require('@/assets/images/close_window.svg')" alt="" width="30px" />
        </div>
        
      </div>

      <div :class="is_menu_open ? 'block' : 'hidden'" class="items-center md:m-0 pt-4 md:flex md:h-auto h-screen-90 md:bg-transparent bg-white position md:max-w-max w-full">
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
export default{
	data(){
    return{
      is_menu_open: false,
    }
  },

  methods: {
    toggleMenu(){
      this.is_menu_open = !this.is_menu_open;
    },

  }
}

</script>

<style>
body{
  overflow-x: hidden;
}

</style>