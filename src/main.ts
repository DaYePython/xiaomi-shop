import App from '@/App.vue'
import { createApp } from 'vue'

// base css
import 'normalize.css/normalize.css'
import '@style/index.scss'

import layout from '@/plugins/layout'

const app = createApp(App)
app.use(layout)
app.mount('#app')