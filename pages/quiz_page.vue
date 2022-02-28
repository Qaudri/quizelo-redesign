<template >
  <div class="flex items-center justify-center h-screen">
    <div class="flex md:h-screen-80 items-center">
      
      <div class="w-full">
        <div class="">

          <div class="bg-accent1-300 bg-opacity-20 p-6 w-screen mx-auto">
            <SectionsQuizQuestion />
          </div>

        </div>
        
        <div class="px-6 md:px-0 container mx-auto my-20">
          <SectionsQuizAnswer />
        </div>
        
        <div class="container mx-auto">

          <div class="my-4 w-full absolute bottom-0 px-6 md:px-0 flex justify-between container mx-auto">
            <SectionsQuizNavbar />
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