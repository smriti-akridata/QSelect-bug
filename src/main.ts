import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/material-icons-outlined/material-icons-outlined.css";
import { Quasar, Notify, Loading, Dialog } from "quasar";

const app = createApp(App);
app.directive("visible", (el, binding) => {
  el.style.visibility = binding.value ? "visible" : "hidden";
});
app.use(Quasar, {
  config: {},
  components: {
    /* not needed if importStrategy is not 'manual' */
  },
  directives: {
    /* not needed if importStrategy is not 'manual' */
  },
  plugins: { Notify, Loading, Dialog },
});

app.mount("#app");

