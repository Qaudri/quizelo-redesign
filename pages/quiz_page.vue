<template >
  <div class="flex items-center justify-center h-screen">
    <div class="flex md:h-screen-80 items-center">
      
      <div class="w-full">
        <div class="">

          <div class="bg-accent1-300 bg-opacity-20 p-6 w-screen mx-auto rounded-xl">
            <SectionsQuizQuestion />
          </div>

        </div>
        
        <div class="px-6 md:px-0 container mx-auto my-24">
          <SectionsQuizAnswer />
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