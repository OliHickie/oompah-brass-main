import './assets/main.css'
import 'lazysizes'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

router.isReady().then(() => {
  // Check if GitHub Pages redirected us with a ?redirect= path
  const redirect = new URLSearchParams(window.location.search).get('redirect')
  if (redirect) {
    router.replace(redirect)
  }
  app.mount('#app')
})

