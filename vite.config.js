import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import EnvironmentPlugin from 'vite-plugin-environment';

export default defineConfig({
  plugins: [
    react(),
    EnvironmentPlugin({
      REACT_APP_BASE_URL: process.env.REACT_APP_BASE_URL,
      REACT_APP_API_KEY: process.env.REACT_APP_API_KEY,
    }),
  ],
  server: {
    host: 'localhost',
    port: 3000,
  },
});
