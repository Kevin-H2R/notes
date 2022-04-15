import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: []
  },
  mutations: {
  },
  actions: {
    fetchNotes: () => {
      axios.get('http://' + process.env.VUE_APP_HOST + ':3001/notes')
        .then(response => {
          console.log(response.data)
        })
    }
  },
  getters: {
    notes: state => state.notes
  },
  modules: {
  }
})
