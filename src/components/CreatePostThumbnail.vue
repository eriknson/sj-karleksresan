<template>
  <v-card>
    <v-snackbar top timeout="11000" v-model="snackbar">
      Snyggt! Ditt inlägg är postat. Uppdatera sidan för att se det.
    </v-snackbar>
    <v-card-title>Hitta flörten från tågresan</v-card-title>
    <v-card-text
      >Många av oss har haft en flirt på ett tåg någon gång. Ögonkontakt med
      snyggingen tvärs över gången, ett fnittrigt ögonblick när man tränger sig
      förbi varandra i bistron eller händer som nuddar varandra när man
      tillsammans lyfter upp en tung väska. En känsla av att det skulle ha
      kunnat bli något. Om den ene inte gått av tåget.
    </v-card-text>
    <v-card-actions
      ><v-dialog v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-container class="pa-2"
            ><v-btn color="primary white--text" dark v-bind="attrs" v-on="on">
              Skapa inlägg ❤️
            </v-btn></v-container
          >
        </template>
        <v-card>
          <v-container>
            <v-card-title>
              <span class="heading-1">När, hur och var sågs ni?</span>
            </v-card-title>
            <v-card-subtitle
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
              aliqua.</v-card-subtitle
            >
            <v-card-text>
              <v-row>
                <!-- Date -->
                <v-col cols="12" sm="12" md="12">
                  <!-- <v-card-text
                    style="color: rgba(0, 0, 0, 0.6)"
                    class="body-1 pl-0"
                    >När sågs ni?</v-card-text
                  > -->
                  <v-date-picker
                    color="primary"
                    no-title
                    elevation="0"
                    locale="sv"
                    :full-width="true"
                    first-day-of-week="1"
                    v-model="flirtDate"
                  ></v-date-picker>
                </v-col>
                <v-col cols="12" sm="12" md="12">
                  <v-select
                    v-model="flirtEndStation"
                    :items="destinations"
                    label="Tågets slutstation"
                  ></v-select>
                </v-col>
                <!-- What happend -->
                <v-col cols="12" sm="6">
                  <v-select
                    item-text="primary--text"
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
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer
              ><v-btn color="error" @click="dialog = false"> Avbryt 💔 </v-btn>
              <v-btn color="primary" @click="savePostData(postObject)">
                Skapa 📮
              </v-btn>
            </v-card-actions>
          </v-container>
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
          this.flirtDate = new Date().toISOString().substr(0, 10);
          this.flirtEndStation = undefined;
          this.flirtActivity = undefined;
          this.flirtLocation = undefined;
          this.flirtDescription = "";
          this.snackbar = true;
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
        endStation: this.flirtEndStation,
        activity: this.flirtActivity,
        location: this.flirtLocation,
        description: this.flirtDescription
      };
    }
  },

  data: () => ({
    flirtDate: new Date().toISOString().substr(0, 10),
    flirtEndStation: undefined,
    flirtActivity: undefined,
    flirtLocation: undefined,
    flirtDescription: "",
    dialog: false,
    snackbar: false,
    e1: 1,
    rules: [(v: string | unknown[]) => v.length <= 280 || "Max 280 tecken"],
    destinations: [
      "Alabama",
      "Alaska",
      "American Samoa",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "District of Columbia",
      "Federated States of Micronesia",
      "Florida",
      "Georgia",
      "Guam",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Marshall Islands",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Northern Mariana Islands",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Palau",
      "Pennsylvania",
      "Puerto Rico",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virgin Island",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming"
    ]
  })
});
</script>

<style>
</style>
