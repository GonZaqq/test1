import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/test1/',  // ← ТВОЁ ИМЯ РЕПО! (test1)
  build: {
    outDir: 'dist'
  }
})
