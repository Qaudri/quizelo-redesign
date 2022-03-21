<template>
  <div>
    <div @click="emitQuestionNumber(item)" v-for="item in question_no" :key="item" :class="active_question_no === item ? 'bg-accent1-600 text-white' : 'bg-white border-2 border-accent1-600 text-black' "
    class="select-none mx-4 h-10 w-10 rounded-lg flex items-center justify-center font-medium">
      {{item}}
    </div>
  </div>
</template>

<script>

export default {
  props: {
    question_no: Number,
    active_question_no: Number
  },


  methods: {
    emitQuestionNumber(item){
      this.$emit("changeQuestion", item)
    }
  }
}
</script>

<style>

</style>