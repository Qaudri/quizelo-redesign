<template>
  <div>

    <SectionsCommonHeader />

    <section class="mx-auto container">

      <div class=" flex items-center">

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
                <a href="/start_game"
                  class="cursor-pointer border-2 bg-gradient-to-r from-accent1-500 to-accent2-500  px-4 py-3 uppercase text-white rounded-lg font-medium">
                  Start Solving
              </a>

                <div class="ml-3 flex items-center">
                  
                  <div class="mx-1">
                    <img :src="require('@/assets/images/dropdown.svg')" width="10px">
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