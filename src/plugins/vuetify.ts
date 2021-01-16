import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#1a883d",
        secondary: "#ebebe3",
        accent: "#252525",
        error: "#b71c1c",
      },
    },
  },
});
