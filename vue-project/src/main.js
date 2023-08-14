import { createApp } from 'vue'
import App from './App.vue'
import Notifications from '@kyvg/vue3-notification'
import './assets/style.css'
import router from './router/index';
import store from './store/store';
const app = createApp(App)
app.use(router);
app.use(store);
app.use(Notifications)
app.mount('#app')


