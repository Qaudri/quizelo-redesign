<template>
  <div class="px-8 md:px-0 flex items-center justify-between py-3 container mx-auto">
    <UiSharedLogo />

    <a href="#" @click="emitModalEvent"
      class=" cursor-pointer border bg-gradient-to-r from-accent1-500 to-accent2-500 md:text-lg text-base px-4 md:px-7 py-2 md:py-3 uppercase text-white rounded-lg font-medium">
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