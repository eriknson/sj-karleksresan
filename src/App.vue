<template>
  <v-app>
    <v-app-bar flat app color="primary" dark>
      <div class="d-flex align-center">
        <router-link to="/"
          ><v-img
            alt="Vuetify Logo"
            class="shrink mr-4"
            contain
            src="https://resources.mynewsdesk.com/image/upload/c_fill,dpr_auto,f_auto,g_auto,q_auto,w_1782/jsmrbkodvvldk1qek7mt.jpg"
            transition="scale-transition"
            width="40"
          />
        </router-link>
      </div>
      <h2>Kärleksresan</h2>
      <h2 class="ml-4 mt-1 overline">V0.0001</h2>
    </v-app-bar>
    <v-main class="secondary">
      <router-view />
    </v-main>
    <v-footer padless>
      <v-card width="100%" flat tile class="primary white--text text-center">
      </v-card>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    //
  })
});
</script>
