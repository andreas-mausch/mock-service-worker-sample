import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

if (import.meta.env.VITE_WITH_MOCKS) {
  const { worker } = await import('./mocks/browser')
  await worker.start()
}

createApp(App).mount('#app')
