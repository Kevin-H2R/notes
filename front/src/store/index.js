import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: []
  },
  mutations: {
    setNotes(state, notes) {
      state.notes = notes
    },
    resetNotes(state) {
      state.notes = []
    }
  },
  actions: {
    fetchNotes: (context) => {
      context.commit('resetNotes')
      axios.get('http://' + process.env.VUE_APP_HOST + ':3001/notes')
        .then(response => {
          context.commit('setNotes', response.data.notes)
        })
    }
  },
  getters: {
    notes: state => state.notes
  },
  modules: {
  }
})
