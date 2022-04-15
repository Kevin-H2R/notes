<template>
  <v-card width="500">
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>{{ content }}</v-card-text>
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
};
</script>