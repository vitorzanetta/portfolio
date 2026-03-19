import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio/', // troque se seu repositório tiver outro nome
  plugins: [react()],
});

