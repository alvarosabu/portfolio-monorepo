import { createApp } from 'vue'
import App from './App.vue'
import AsUI from './index'

const app = createApp(App)

app.use(AsUI)

app.mount('#app')
