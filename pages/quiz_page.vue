<template >
  <div class="flex items-center justify-center h-screen">
    <div class="flex md:h-screen-80 items-center">
      
      <div class="w-full">
        <div class="">
          <div class="bg-accent1-300 bg-opacity-10 my-2 p-6 z-10 w-screen mx-auto rounded-xl left-0">
            <div class="">
              <p class="mx-4 font-normal text-lg md:text-2xl md:pr-36 text-gray-800 md:w-full">Which of the following
                interface design applications runs in browser
                and supports team based collaborative design projects?
              </p>
            </div>
          </div>
        </div>
        
        <div class="px-6 md:px-0 grid grid-cols-2 gap-8 container mx-auto md:gap-x-36 my-8">
          <div class="group bg-accent3-200 relative hover:bg-accent1-600 rounded-xl px-14 py-8">
            <p class="text-accent3-400 font-medium text-sm absolute top-2 left-2 group-hover:text-white">A.</p>
            <h1 class="text-accent3-700 font-medium text-md md:text-lg group-hover:text-white uppercase">Figma</h1>
          </div>
        
          <div class="group bg-accent3-200 relative hover:bg-accent1-600 rounded-xl px-14 py-8">
            <p class="text-accent3-400 font-normal text-sm absolute top-2 left-2 group-hover:text-white">B.</p>
            <h1 class="text-accent3-600 font-medium text-md md:text-lg group-hover:text-white uppercase">Sketch</h1>
          </div>
        
          <div class="group bg-accent3-200 relative hover:bg-accent1-600 rounded-xl px-14 py-8">
            <p class="text-accent3-400 font-normal text-sm absolute top-2 left-2 group-hover:text-white">C.</p>
            <h1 class="text-aceent3-600 font-medium text-md md:text-lg group-hover:text-white uppercase">Invision</h1>
          </div>
        
          <div class="group bg-accent3-200 relative hover:bg-accent1-600 rounded-xl">
            <p class="text-accent3-400 font-normal text-sm absolute top-2 left-2 group-hover:text-white">D.</p>
            <h1 class="text-accent3-600 font-medium text-md md:text-lg px-14 py-8 group-hover:text-white uppercase">Framer</h1>
          </div>
        </div>
        
        <div class="container mx-auto">

          <div class="my-4 w-full absolute bottom-0 px-6 md:px-0 flex justify-between container mx-auto">

            <div class="flex bg-accent3-300 p-2 hover:bg-transparent hover:border-accent3-400 border-2">
              <img :src="require('@/assets/images/backward.svg')" alt="" class="mr-2" />
              <p class="font-medium text-accent3-600 mt-1">Previous</p>
            </div>
        
            <div><img :src="require('@/assets/images/clock.svg')" alt="">
            </div>
        
            <div class="flex">
              <div class="flex bg-accent1-600 p-2 hover:bg-transparent hover:border-accent1-600 border-2">
                <p class="font-medium text-white mr-2 hover:text-accent1-600">Next</p>
                <img :src="require('@/assets/images/forward.svg')" alt="">
              </div>

              <div class="flex mx-2 p-2">
                <p class="font-medium text-accent1-600 mr-2">Skip</p>
                <img :src="require('@/assets/images/fast-forward.svg')" alt="">
              </div>
            </div>
      


          </div>

        </div>
      </div>
        
    </div>  
  </div>
</template>

<script>
export default {

}
</script>

<style>
body{
  position: relative;
  width: 100%;
  height: 100%;
}
</style>