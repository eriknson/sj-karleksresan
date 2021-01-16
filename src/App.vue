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
      <v-spacer></v-spacer>
      <v-btn @click="$router.push('create')" class="primary">Skapa inlägg</v-btn>
    </v-app-bar>
    <v-main class="secondary">
      <router-view />
    </v-main>
    <v-footer padless>
      <v-card width="100%" flat tile class="primary white--text text-center">
        <v-card-text class="white--text">
          Länkar till legal och sånt annat viktigt som behöver va me kan man ha här.
        </v-card-text>
        <v-card-text class="white--text"
          ><strong>Copyright {{ new Date().getFullYear() }} — SJ AB </strong></v-card-text
        >
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
  }),
});
</script>
