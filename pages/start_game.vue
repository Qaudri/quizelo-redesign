<template>
  <div>
    <section class="max-w-7xl mx-auto px-6 md:px-0">
      <div class="block md:flex justify-between items-center py-6 bg-white ">

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
            class=" mx-6 cursor-pointer md:mx-8 border bg-gradient-to-r from-accent1-500 to-accent2-500  px-4 py-3 uppercase text-white rounded-lg font-medium">
            Login
          </a>
        </div>
    
      </div>
      <div class="md:border-b-2"></div>
    </section>

    <section class="max-w-7xl mx-auto lg:h-screen-90 items-center flex">

      <div class="w-full">
        <div class="lg:flex justify-between px-6 md:px-10 2xl:p-0">
          <div class="w-full lg:w-1/2">
            <div class="pt-16 text-4xl md:text-6xl font-bold">
              <div>
                <h2>Learn <br> new concepts <br>for each question</h2>
              </div>
            </div>

            <div class="mt-8 border-l-2 p-3 border-gray-800">
              <p class="text-gray-400">We help you prepare for exams and quizes</p>
            </div>

            <div class="flex mt-8">
              <a href="./start_game.html"
                class="cursor-pointer border-2 bg-gradient-to-r from-accent1-500 to-accent2-500  px-4 py-3 uppercase text-white rounded-lg font-medium">
                Start Solving
            </a>

              <div class="ml-3 flex items-center">
                <div class="mx-1">
                  <img :src="require('@/assets/images/dropdown.jpeg')">
                </div>

                <div>
                  Know More
                </div>
              </div>

            </div>
          </div>

          <div class="w-full lg:w-1/2">
            <img :src="require('@/assets/images/people.svg')" class="w-full">
          </div>
        </div>
      </div>

    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>