<template>
  <v-container>
    <v-btn fab color="primary" fixed bottom right><v-icon>mdi-plus</v-icon></v-btn>
  </v-container>
</template>
<script>
export default {
  name: "HomePage",
  created() {
    this.$store.dispatch('fetchNotes')
  }
};
</script>