<template>
  <v-card width="500">
    <v-card-title class="text-h4">{{ title }}</v-card-title>
    <v-card-text>
    <v-container v-html="text" class="text-h6 font-weight-light"></v-container>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "NoteCard",
  props: {
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    date: {
      type: String,
    },
  },
  data() {
    return {
      text: this.content.replaceAll('\n', '<br/>')
    }
  }
};
</script>