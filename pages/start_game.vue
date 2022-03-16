<template>

  <div>

    <section class="h-screen w-full items-center flex justify-center">
      <div
        class="w-2/3 md:w-1/2 lg:w-1/4 fixed  rounded-2xl border-2 border-accent1-500 p-8 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transform ">
        
        <div class="flex items-center justify-center py-6 -mt-20 bg-white rounded-full border-2 border-accent1-500">
          <img :src="require('@/assets/images/quizelo.svg')" class="w-32" />
        </div>
      

        <form class="py-2">
          <input placeholder="Enter your name to start"
          class="select-none my-6 text-xl w-full border-b border-gray-400 outline-none text-center p-4" />

          <div class="w-full flex items-center justify-center">
            <a href="/quiz_page" class="flex justify-center font-medium uppercase text-white py-4 w-full bg-gradient-to-r from-accent1-500 to-accent2-500 cursor-pointer rounded-lg">
              Start
            </a>
          </div>
        </form>
        
        <a
          class="cursor-pointer bg-blue-700 w-full px-4 py-4 uppercase border-0 text-white rounded-lg font-medium flex items-center justify-center">
          <img :src="require('@/assets/images/fb.svg')" class="w-6 mr-2" />
          <p class="">Play with Facebook</p>
        </a>
        
      </div>
    </section>

  </div>
</template>



<script>
export default {
  name: 'IndexPage',

  methods:{
    pushLink(){
      this.$router.push({path: '/quiz_page'})
    }
  }
}
</script>
