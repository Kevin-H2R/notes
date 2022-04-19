<template>
  <v-card
    width="500"
    max-height="500"
    class="overflow-hidden"
    @click="dialog = true"
    color="white"
  >
    <v-card-title class="text-h4">{{ title }}</v-card-title>
    <v-card-text>
      <v-container
        v-html="text"
        class="text-h6 font-weight-light"
      ></v-container>
    </v-card-text>
    <v-dialog fullscreen v-model="dialog" transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary" class="toolbar-no-radius">
          <div class="text-h3">{{ title }}</div>
          <v-spacer></v-spacer>
          <v-btn icon @click="save()" v-if="modification"
            ><v-icon>mdi-content-save</v-icon></v-btn
          >
          <v-btn icon @click="modification = true" v-else
            ><v-icon>mdi-pencil</v-icon></v-btn
          >
          <v-btn icon @click="dialog = false"><v-icon>mdi-close</v-icon></v-btn>
        </v-toolbar>
        <v-card-text class="pt-5">
          <v-container>
            <v-row justify="center">
              <v-col cols="12" sm="8" md="6">
                <v-form @submit.prevent="save()">
                  <v-row>
                    <v-textarea
                      class="text-h6 font-weight-light note-card__textarea"
                      :class="modification ? '' : 'textarea-cursor'"
                      :outlined="modification"
                      :readonly="!modification"
                      solo
                      flat
                      spellcheck="false"
                      auto-grow
                      v-model="textNewLines"
                    />
                  </v-row>
                  <v-row justify="center" v-if="modification">
                    <v-col cols="12" sm="10" md="6">
                      <v-btn
                        width="100%"
                        color="primary"
                        @click="save()"
                        >Save</v-btn
                      >
                    </v-col>
                  </v-row>
                </v-form>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-snackbar v-model="snackbar" elevation="20" content-class="text-center">Contenu non-modifié</v-snackbar>
      </v-card>
    </v-dialog>
  </v-card>
</template>
<script>
import axios from "axios";
export default {
  name: "NoteCard",
  props: {
    id: {
      type: Number,
      required: true,
    },
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
  methods: {
    save() {
    if (this.textNewLines.replaceAll('\n', '<br/>') === this.content) {
      this.snackbar = true
      return
    }
      axios
        .post("http://" + process.env.VUE_APP_HOST + ":3001/notes/save", {
          content: this.textNewLines,
          id: this.id,
        })
        .then(() => {
          this.text = this.textNewLines.replaceAll("\n", "<br/>");
          (this.modification = false), (this.dialog = false);
        });
    },
  },
  data() {
    return {
      text: this.content,
      dialog: false,
      modification: false,
      textNewLines: this.content.replaceAll("<br/>", "\n"),
      snackbar: false
    };
  },
};
</script>
<style lang="scss">
.textarea-cursor textarea {
  cursor: auto!important;
}
.v-card--link:before {
  background-color: initial
}
</style>