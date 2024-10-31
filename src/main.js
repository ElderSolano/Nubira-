import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Importa el router
import '@/assets/css/bootstrap.min.css'
import '@/assets/js/bootstrap.bundle.min.js'

createApp(App).use(router).mount('#app') // Usa el router en la aplicación