<template>
  <div class="select-none" >
    <div :class="selected ? 'bg-accent1-500' : 'bg-accent3-200' " @click="emitChooseOption" class="relative rounded-2xl md:px-14 px-12 py-8 md:py-10" >
        <p :class="selected ? 'text-white' : 'text-accent3-400' " class=" font-medium text-sm absolute top-3 left-4 ">{{option_tag}}</p>
        <h1 :class="selected ? 'text-white' : 'text-black' " class="text-accent3-700 font-medium text-md md:text-xl uppercase">{{option_text}}</h1>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    option_text: String, 
    option_tag: String,
    selected: Boolean,
  },

    methods: {
      emitChooseOption(){
      this.$emit("OptionChosen")
    }
  }


}
</script>

<style>

</style>