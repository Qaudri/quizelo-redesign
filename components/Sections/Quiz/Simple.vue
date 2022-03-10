<template>
  <div class=" absolute bg-accent3-600 bg-opacity-80 flex items-center justify-center h-full w-full">

    <div class="bg-white rounded-xl p-6 h-32 w-1/2">

      <div>
        <div class="border-b text-xl pb-4 font-semibold flex justify-between">

          <p class="font-medium text-black text-lg">Confirm Submission</p>

          <div class="">

            <button @click="emitCloseEvent">
              <img :src="require('@/assets/images/close_window.svg') " alt="" width="35px" />
            </button>

          </div>

        </div>

        <div class="my-4 flex items-center justify-center w-full">
          <div>
            <img :src="require('@/assets/images/important.svg')" class="w-20 flex items-center justify-center m-0" />

            <p class="text-black font-medium text-xl text-center max-w-sm flex justify-center">Are you sure you want to submit? This action is irreversible!</p>
          </div>

        </div>
        
        
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    openDialog: Boolean,

    button: String

  },

  methods: {
    emitCloseEvent(){
      this.$emit('closeDialog')
    }
  }
}
</script>

<style>

</style>