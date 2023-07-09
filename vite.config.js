/* eslint-disable no-undef */
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      react(),
    
    ],
    build: {
      outDir: "./dist/app/",
      sourcemap: true,
    },
    server: {
      port: env.VITE_PORT,
    },
  };
});