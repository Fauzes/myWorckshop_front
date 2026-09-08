import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'  // создайте простой App.vue для тестов
import myworckshop_front from './index'

const app = createApp(App)
app.use(createPinia())
app.use(myworckshop_front)
app.mount('#app')
