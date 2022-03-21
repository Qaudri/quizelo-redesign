export const state = () => ({
  posts: []
})

export const getters = {

  getNews(state){
    return state.posts
  }
}

export const actions = {

  async retrievePostsFromApi(context){
    context.commit("SET_POSTS" , {})
    const api_posts = await this.$axios.get("http://osunstate.gov.ng/wp-json/wp/v2/posts?per_page=10&context=embed")
    context.commit("SET_POSTS", api_posts.data )
  },
}

export const mutations = {

  SET_POSTS(state, payload){
    state.posts= payload

  }
}

