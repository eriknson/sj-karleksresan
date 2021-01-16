<template>
  <v-card>
    <v-card-title>Senaste inläggen</v-card-title>
    <v-card-text>{{ this.posts }}</v-card-text>
    <v-card-actions
      ><v-btn class="primary">Se alla inlägg</v-btn></v-card-actions
    >
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import firebase from "../firebaseConfig";
const db = firebase.firestore();

export default Vue.extend({
  name: "PostFeed",
  created: function() {
    console.log("PostFeed.vue created");
    const postsFromFirebase: {
      id: string;
      date: string;
      activity: Array<string>;
      location: Array<string>;
      description: string;
    }[] = [];
    db.collection("posts")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          postsFromFirebase.push({
            id: doc.id,
            date: doc.data().date,
            activity: doc.data().activity,
            location: doc.data().location,
            description: doc.data().description
          });
          console.log(doc.id, " => ", doc.data());
        });
        this.posts = postsFromFirebase;
      })
      .catch(error => {
        console.log("Error getting documents: ", error);
      });
  },
  data: () => ({
    posts: [] as {
      id: string;
      date: string;
      activity: Array<string>;
      location: Array<string>;
      description: string;
    }[]
  })
});
</script>
