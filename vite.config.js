import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // This supports browsers from ~2015 onwards, covering older iPhones
    target: 'es2015',
    outDir: 'dist',
  },
})

