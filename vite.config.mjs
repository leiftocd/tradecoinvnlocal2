import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import config from './config.json';

export default defineConfig(({ mode }) => {
  let baseUrl;
  if (mode === 'development') {
    baseUrl = 'http://localhost:5173';
  } else if (process.env.VERCEL_URL) {
    baseUrl = `https://${process.env.VERCEL_URL}`;
  } else {
    baseUrl = config.Domain;
  }

  return {
    plugins: [
      react(),
      tailwindcss(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            BASE_URL: baseUrl,
          },
        },
      }),
    ],
    build: {
      rollupOptions: {
        input: 'index.html', // chỉ cần trang chính cho React app
      },
    },
  };
});