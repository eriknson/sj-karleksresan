<template>
  <v-card class="mt-4 pb-4" :loading="this.loading" tile>
    <v-card-title>Lorem ipsum dolor sit amet</v-card-title>
    <div class="d-flex flex-wrap">
      <v-card
        class="pa-0 ml-4 mb-4"
        width="350px"
        selectable
        two-line
        :key="post.id"
        v-for="post in this.posts"
      >
        <v-dialog max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-card
              class="grey lighten-3 d-flex"
              hover
              tile
              ripple
              v-bind="attrs"
              v-on="on"
              ><v-list-item-icon class="ma-4">
                <v-icon color="black">mdi-tag-heart</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-subtitle class="font-weight-medium">{{
                  post.date
                }}</v-list-item-subtitle>
                <v-list-item-title>{{
                  post.activity + " på ett tåg mot " + post.endStation
                }}</v-list-item-title>
              </v-list-item-content></v-card
            >
          </template>
          <v-card class="pa-4"
            ><v-card-text>
              <div class="body-3">{{ post.date }}</div>
              <p class="title text--primary">
                {{ post.activity + " på ett tåg mot " + post.endStation }}
              </p>
              <div class="text--primary">
                {{ post.description }}
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn outlined elevated="2" class="ml-1" color="primary">
                Svara på inlägg
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card>
    </div>
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
      endStation: string;
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
            endStation: doc.data().endStation,
            activity: doc.data().activity,
            location: doc.data().location,
            description: doc.data().description
          });
          console.log(doc.id, " => ", doc.data());
        });
        this.posts = postsFromFirebase;
        this.loading = false;
      })
      .catch(error => {
        console.log("Error getting documents: ", error);
      });
  },
  data: () => ({
    loading: true,
    posts: [] as {
      id: string;
      date: string;
      endStation: string;
      activity: Array<string>;
      location: Array<string>;
      description: string;
    }[]
  })
});
</script>
