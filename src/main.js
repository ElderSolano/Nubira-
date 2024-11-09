import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Importa el CSS de Bootstrap 5
import 'bootstrap/dist/css/bootstrap.min.css';

// Opcional: importa el JS de Bootstrap si necesitas funcionalidades adicionales
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import SoftUIDashboard from "./soft-ui-dashboard";

const appInstance = createApp(App);
appInstance.use(store);
appInstance.use(router);
appInstance.use(SoftUIDashboard);
appInstance.mount("#app");
