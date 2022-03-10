<template>
  <div class="flex justify-between py-3 container mx-auto">
    <UiSharedLogo />

    <a href="#" @click="emitModalEvent"
      class=" mx-6 cursor-pointer md:mx-8 border bg-gradient-to-r from-accent1-500 to-accent2-500 text-lg  px-7 py-3 uppercase text-white rounded-lg font-medium">
      Submit quiz
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    emitModalEvent(){
      this.$emit("ModalDialog")
    }
  }
}
</script>

<style>

</style>