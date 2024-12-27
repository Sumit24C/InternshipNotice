import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

export default {
  server: {
    host: true,
    port: 5173, // Default port
  },
};

// export default defineConfig({
//   plugins: [react()],
// })
