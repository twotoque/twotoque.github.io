import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  base: "/", 
  plugins: [react(), svgr(),
    tailwindcss(),],
  
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
});
