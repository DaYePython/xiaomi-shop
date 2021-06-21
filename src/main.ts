import App from '@/App.vue'
import { createApp } from 'vue'

// base css
import 'normalize.css/normalize.css'
import '@style/index.scss'

//icon-park
import '@icon-park/vue-next/styles/index.css';

// plugins
import layout from '@/plugins/layout'
import VueLazyLoad from 'vue3-lazyload'

// vue-router
import router from './router';

const app = createApp(App)
app.use(layout)
app.use(VueLazyLoad)
app.use(router)
app.mount('#app')