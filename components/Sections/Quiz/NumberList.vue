<template>
  <div>
    <div v-for="numberItem in 10" :key="numberItem"
    class="h-10 w-10 rounded-full flex items-center justify-center bg-white border-2 border-accent1-600 text-black font-medium">
      {{numberItem}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    numberItem: Number
  }
}
</script>

<style>

</style>