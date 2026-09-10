import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contacto: resolve(__dirname, 'contacto.html'),
        servicios: resolve(__dirname, 'servicios.html'),
        nosotros: resolve(__dirname, 'nosotros.html'),
      },
    },
  },
});