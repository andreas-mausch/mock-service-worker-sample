/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'happy-dom',
    globals: true, // Needed for vue-testing-library: https://testing-library.com/docs/vue-testing-library/setup#vitest,
    setupFiles: './test/setup.ts',
    watch: false
  }
})
