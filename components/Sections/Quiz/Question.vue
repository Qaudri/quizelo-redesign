<template>
  <div >
    <p class="mx-4 font-normal text-lg md:text-2xl md:pr-36 text-gray-800 md:w-full">
      {{question}}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    question: String,
  }
}
</script>

<style>

</style>