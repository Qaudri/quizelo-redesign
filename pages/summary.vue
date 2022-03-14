<template>
  <div>
    <SectionsQuizcompleteOverlay :class="is_revealed ? 'hidden': '' " @viewResults="showResults" 
    class="absolute z-150 w-full bg-white" />

    <SectionsQuizcompleteSummarycard :class="is_revealed ? 'block' : 'hidden' " class="bg-white" />
  </div>
</template>

<script>
export default {
  data(){
    return{
      is_revealed: false
    }
  },

  methods: {
    showResults(){
      setInterval(() => {
        this.is_revealed = true
      }, 1500);
    }
  }
}
</script>

<style>

</style>