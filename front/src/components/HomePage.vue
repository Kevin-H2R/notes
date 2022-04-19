<template>
  <v-container>
    <v-row justify="center">
    <v-col cols="12" sm="6" md="4" v-for="(note, index) in notes" :key="'note_' + index">
      <note-card v-bind="note"/>
    </v-col>
    </v-row>
    <new-note-dialog />
  </v-container>
</template>
<script>
import NewNoteDialog from './NewNoteDialog.vue';
import NoteCard from './NoteCard.vue'
export default {
  components: { NewNoteDialog, NoteCard },
  name: "HomePage",
  created() {
    this.$store.dispatch("fetchNotes");
  },
  computed: {
    notes() {
      console.log(this.$store.getters.notes)
      return this.$store.getters.notes
    }
  },
  watch: {
    notes() {
      this.loading = false
    }
  },
  data() {
    return {
      loading: true,
    };
  },
};
</script>
<style lang="scss">
</style>