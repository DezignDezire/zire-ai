import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedTopic: null
  },
  mutations: {
    selectTopic (state, title) {
      state.selectedTopic = title
    }
  },
  actions: {
    selectTopic ({ commit }, title) {
      commit('selectTopic', title)
    }
  },
  modules: {
  }
})
