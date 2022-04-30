import AsUI from './index'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(AsUI)

app.mount('#app')
