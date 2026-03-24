import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',

      // ในไฟล์ vite.config.ts
  export default defineConfig(({mode}) => {
  // ... โค้ดเดิม ...
  return {
    base: 'https://parkdong07.github.io/Nippon-Colors/', // <--- เพิ่มบรรทัดนี้ (เช่น '/nippon-colors/')
    plugins: [react(), tailwindcss()],
    // ... โค้ดเดิม ...
    },
  };
});
