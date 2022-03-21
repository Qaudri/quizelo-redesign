<template>
  <div>
    <div @click="emitQuestionNumber(item)" v-for="item in question_no" :key="item" :class="selected_question_index === item ? 'bg-accent1-600 text-white' : 'bg-white border-2 border-accent1-600 text-black' "
    class="select-none mx-4 h-10 w-10 rounded-lg flex items-center justify-center  font-medium">
      {{item}}
    </div>
  </div>
</template>

<script>

export default {
  props: {
    question_no: Number,
  },

  data(){
    return{
      selected_question_index: ''
    }
  },

  methods: {
    emitQuestionNumber(item){
      this.selected_question_index = item
      this.$emit("changeQuestion", item)
    }
  }
}
</script>

<style>

</style>