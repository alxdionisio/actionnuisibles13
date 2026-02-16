import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssAsync from './vite-plugin-css-async.js'

// En déploiement GitHub Pages : définir VITE_BASE_PATH=/nom-du-repo/ (avec slash final)
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react(), cssAsync()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
