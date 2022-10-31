import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import VueGoogleMaps from "@fawmi/vue-google-maps";
import 'primevue/resources/primevue.min.css'            // core 
import 'primevue/resources/themes/saga-blue/theme.css'  // theme
import 'primeicons/primeicons.css'                      // icons
import '/node_modules/primeflex/primeflex.css'

import "./assets/main.css";
const app = createApp(App);
app.use(PrimeVue);
app.use(VueGoogleMaps, {
  load: {
    key: "YOUR_API_KEY_COMES_HERE",
  },
});
app.mount("#app");
