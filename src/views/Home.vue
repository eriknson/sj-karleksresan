<template>
  <div class="home">
    <div class="home-hero-img">
      <v-img aspect-ratio="2" src="https://forsman.co/m/i/05/be/05bed82c7c4208b7cf6693ac2093121bc50352e7_3000x2000.jpg" />
    </div>
    <v-container>
      <PostFeed class="mb-4"/>
      <CreatePostThumbnail />
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CreatePostThumbnail from "@/components/CreatePostThumbnail.vue";
import PostFeed from "@/components/PostFeed.vue";

@Component({
  components: {
    CreatePostThumbnail,
    PostFeed,
  },
})
export default class Home extends Vue {}
</script>
