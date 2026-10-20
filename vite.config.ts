import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // lê o .env.local; o '' no fim diz "carrega todas, não só as VITE_"
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api/tmdb': {
          target: 'https://api.themoviedb.org/3',
          changeOrigin: true,
          // tira o "/api/tmdb" da frente: /api/tmdb/tv/1399 vira /tv/1399
          rewrite: (path) => path.replace(/^\/api\/tmdb/, ''),
          headers: {
            Authorization: `Bearer ${env.TMDB_TOKEN}`,
          },
        },
      },
    },
  }
})
