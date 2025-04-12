import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { resolve } from 'path';
import { writeFileSync } from 'fs';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    historyApiFallback: true,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    {
      name: 'generate-spa-redirect',
      closeBundle() {
        // Create a 200.html file that's identical to index.html
        // This is a common pattern for SPA hosting platforms
        const indexPath = resolve(__dirname, 'dist', 'index.html');
        const twoHundredPath = resolve(__dirname, 'dist', '200.html');
        
        try {
          const indexContent = require('fs').readFileSync(indexPath, 'utf-8');
          writeFileSync(twoHundredPath, indexContent);
          console.log('Created 200.html for SPA route handling');

          // Create a _redirects file for Netlify
          const redirectsPath = resolve(__dirname, 'dist', '_redirects');
          const redirectsContent = `/* /index.html 200`;
          writeFileSync(redirectsPath, redirectsContent);
          console.log('Created _redirects file for Netlify');
        } catch (error) {
          console.error('Error generating SPA files:', error);
        }
      }
    }
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined, // Disable code splitting to avoid eval issues
      },
    },
  },
}));
