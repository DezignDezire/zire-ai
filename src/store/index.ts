import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedTopic: null,
    latestComments: []
  },
  mutations: {
    selectTopic (state, title) {
      state.selectedTopic = title
    },
    updateLatestComments (state, comments) {
      state.latestComments = comments
    }
  },
  actions: {
    selectTopic ({ commit }, title) {
      commit('selectTopic', title)
    },
    updateLatestComments ({ commit }, comments) {
      commit('updateLatestComments', comments)
    }
  },
  modules: {
  }
})
