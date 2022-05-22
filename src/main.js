import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vSelect from "vue-select";
import VueTableLite from "vue3-table-lite";
import Toast from "vue-toastification";

// * import Pinia
import { createPinia } from "pinia";

//* import Bootstrap 5
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

//* import styles
import "vue-select/dist/vue-select.css";
import "vue-toastification/dist/index.css";

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.use(Toast);
app.component("v-select", vSelect);
app.component("table-lite", VueTableLite);
app.mount("#app");
