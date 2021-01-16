<template>
  <v-card>
    <v-card-title>Skapa ett inlägg</v-card-title>
    <v-card-text>Hitta din kärlek! Lorem ipsum, dolor set mit amet</v-card-text>
    <v-card-actions
      ><v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            Skapa inlägg
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Skapa inlägg</span>
            {{ postObject }}
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <!-- Date -->
                <v-col cols="12" sm="12" md="12">
                  <v-card-text class="overline pl-0">När sågs ni?</v-card-text>
                  <v-date-picker
                    color="accent"
                    locale="sv"
                    :full-width="true"
                    first-day-of-week="1"
                    v-model="flirtDate"
                  ></v-date-picker>
                </v-col>
                <!-- What happend -->
                <v-col cols="12" sm="6">
                  <v-select
                    multiple
                    :items="[
                      'Våra ögon möttes',
                      'Vi log mot varann',
                      'Vi tå(g)flörtade',
                    ]"
                    label="Vad hände?"
                    required
                    v-model="flirtActivity"
                  ></v-select>
                </v-col>
                <!-- Where -->
                <v-col cols="12" sm="6">
                  <v-select
                    multiple
                    :items="['På perrongen', 'I bistron', 'I vagnen']"
                    label="Vart på tåget?"
                    required
                    v-model="flirtLocation"
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="12" md="12">
                  <v-textarea
                    counter
                    label="Beskriv med egna ord kortfattat vad som hände…"
                    :rules="rules"
                    v-model="flirtDescription"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" @click="dialog = false"> Close </v-btn>
            <v-btn color="primary" @click="savePostData(postObject)">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog></v-card-actions
    >
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import firebase from "../firebaseConfig";
const db = firebase.firestore();

export default Vue.extend({
  name: "CreatePostThumbnail",
  methods: {
    savePostData: function(postData: Record<string, unknown>) {
      this.dialog = false;
      db.collection("posts")
        .add(postData)
        .then(() => {
          console.log(postData);
        })
        .catch(error => {
          console.error("Error writing to firebase: ", error);
        });
    }
  },
  computed: {
    postObject: function() {
      return {
        date: this.flirtDate,
        activity: this.flirtActivity,
        location: this.flirtLocation,
        description: this.flirtDescription
      };
    }
  },

  data: () => ({
    dialog: false,
    e1: 1,
    rules: [(v: string | unknown[]) => v.length <= 280 || "Max 280 tecken"],
    flirtDate: new Date().toISOString().substr(0, 10),
    flirtActivity: undefined,
    flirtLocation: undefined,
    flirtDescription: ""
  })
});
</script>
