import App from '@/App.vue';
import { createApp } from 'vue'

// base css
import 'normalize.css/normalize.css'
import 'style/base/index.scss'

const app = createApp(App)

app.mount('#app')