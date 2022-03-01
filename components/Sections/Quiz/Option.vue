<template>
    <div class="group bg-accent3-200 relative hover:bg-accent1-600 rounded-2xl px-14 py-10">
      <div 
      class="text-accent3-400 font-medium text-sm absolute top-3 left-4 group-hover:text-white">
      {{optionName}}.
      </div>

      <div 
      class="text-accent3-700 font-medium text-md md:text-xl md:px-8 group-hover:text-white uppercase">
      {{optionTitle}}
      </div>

    </div>
</template>

<script>
export default {
  name: 'OptionValue',

  props: {
    optionName: {
      default: "A",
    },

    optionTitle: {
      default: "Option"
    },
  },

}
</script>

<style>

</style>