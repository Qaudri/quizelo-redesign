<template>
  <div>
    <div>
      <SectionsCommonHeader />
    </div>
  </div>
</template>

<script>

import {mapGetters, mapActions} from 'vuex';

export default {

  computed: {
    ...mapGetters({
      news : 'news/getNews',
    })
  },

  methods: {
    ...mapActions({
      retrieveNews: 'news/retrievePostsFromApi'
    }),
  },

  created(){
    this.retrieveNews()
  }
}
</script>

<style>

</style>