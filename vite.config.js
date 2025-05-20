import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

import ghPages from "vite-plugin-gh-pages";

export default defineConfig({
  base: "/", 
  plugins: [react(), svgr(), ghPages()],
});
