import { createApp } from 'vue'
import App from './App.vue'
import Notifications from '@kyvg/vue3-notification'
import './assets/style.css'
createApp(App).use(Notifications).mount('#app')

