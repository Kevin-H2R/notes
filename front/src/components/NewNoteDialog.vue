<template>
  <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition">
    <template v-slot:activator="{ on, attrs }">
      <v-btn fab color="primary" fixed bottom right v-bind="attrs" v-on="on"
        ><v-icon>mdi-plus</v-icon></v-btn
      >
    </template>
    <v-card>
      <v-toolbar color="primary" dark class="toolbar-no-radius">
        <div class="text-h4">Nouvelle pensée</div>
        <v-spacer></v-spacer>
        <v-btn icon @click="dialog = false"><v-icon>mdi-close</v-icon></v-btn>
      </v-toolbar>

      <v-card-text>
        <v-container>
          <v-form @submit.prevent="upload()">
            <v-text-field
              placeholder="Titre"
              v-model="title"
              class="text-h4 font-weight-light title_input"
              hide-details
              solo
              flat
            />
            <v-row justify="center">
              <v-col cols="12" md="6" lg="4" xl="3">
                <v-divider inset class="my-5" />
              </v-col>
            </v-row>
            <v-textarea
              auto-grow
              spellcheck="false"
              solo
              flat
              v-model="content"
              autofocus
              placeholder="Contenu"
              class="text-h5 font-weight-light"
            />
          </v-form>
        </v-container>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          text
          type="submit"
          @click="upload()"
          :disabled="content.trim() == '' || loading"
          :loading="loading"
          >Valider</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import axios from "axios";
export default {
  name: "NewNoteDialog",
  methods: {
    upload() {
      this.loading = true;
      axios
        .post("http://" + process.env.VUE_APP_HOST + ":3001/notes", {
          content: this.content,
          title: this.title,
        })
        .then(() => {
          this.loading = false;
          this.title = "";
          this.content = "";
          this.dialog = false;
          this.$store.dispatch("fetchNotes");
        });
    },
  },
  data() {
    return {
      dialog: false,
      content: "",
      title: "",
      loading: false,
    };
  },
};
</script>
<style lang="scss">
.title_input input {
  max-height: 64px !important;
  height: 64px;
}
.toolbar-no-radius {
  border-top-left-radius: 0!important;
  border-top-right-radius: 0!important;
}
</style>