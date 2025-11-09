import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(data => ({
  plugins: [react()],
  base: loadEnv(data.mode, process.cwd()).VITE_BASE_PATH,
}));
