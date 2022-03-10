<template>
  <div v-show="openDialog" class=" absolute bg-gray-800 bg-opacity-80 flex items-center justify-center h-screen w-full">

    <div class="bg-white rounded-xl p-6 w-1/2">

      <div>
        <div class="border-b text-xl pb-4 font-semibold flex justify-between">

          <slot name="title" />

          <div class="">

            <button @click="emitCloseEvent">
              <img :src="require('@/assets/images/close.svg') " alt="" width="35px" />
            </button>

          </div>

        </div>

        <div class="my-4">
          <slot />
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