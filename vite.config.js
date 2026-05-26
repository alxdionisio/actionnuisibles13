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
  server: {
    proxy: {
      '/api': {
        target: `http://localhost:${process.env.ADMIN_PORT || 3001}`,
        changeOrigin: true,
        // Le serveur admin est optionnel en dev : le front retombe sur les
        // données statiques. On évite de spammer la console avec la stack
        // ECONNREFUSED et on renvoie un 503 propre.
        configure: (proxy) => {
          let warned = false
          proxy.on('error', (_err, _req, res) => {
            if (!warned) {
              console.warn('[vite] serveur admin (/api) non démarré — fallback données statiques. Lancer `npm run admin:dev` pour les données dynamiques.')
              warned = true
            }
            if (res && !res.headersSent && typeof res.writeHead === 'function') {
              res.writeHead(503, { 'Content-Type': 'application/json' })
              res.end(JSON.stringify({ error: 'admin server offline' }))
            }
          })
        },
      },
    },
  },
})
