import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "https://wasihun-code.github.io/react_portfolio/dist/",
  plugins: [react()],
});
