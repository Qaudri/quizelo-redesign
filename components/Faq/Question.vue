<template>

  <div @click="dropDown" :class="is_clicked ? 'border-b-0 rounded-b-none' : ''"
  class="w-screen-1/2 flex rounded-lg justify-between px-4 py-3  border-2 border-accent1-600 bg-white
   text-accent1-600 text-lg font-medium">
    <slot class="cursor-pointer" />

    <img :src="require('@/assets/images/dropdown.svg')" alt="" width="10px"
    :class="is_clicked ? 'hidden' : 'block' " class="">

    <img :src="require('@/assets/images/dropup.svg')" alt="" width="10px" 
    :class="is_clicked ? 'block' : 'hidden' " class="">

  </div>

</template>

<script>
export default {
  data(){
    return{
      is_clicked: false,
    }
  },

  methods: {
    dropDown(){
      this.is_clicked = !this.is_clicked,
      this.$emit("questionClicked")
    }
  }
}
</script>

<style>

</style>