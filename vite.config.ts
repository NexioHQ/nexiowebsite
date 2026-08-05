import path from 'path';
import { mkdirSync, writeFileSync } from 'fs';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import { buildHumansTxt, buildImageSitemapXml, buildRobotsTxt, buildSitemapXml } from './src/lib/site';

function seoArtifactsPlugin() {
  return {
    name: 'seo-artifacts',
    closeBundle() {
      const distDir = path.resolve(import.meta.dirname, 'dist');
      mkdirSync(path.resolve(distDir, '.well-known'), { recursive: true });
      writeFileSync(path.resolve(distDir, 'robots.txt'), buildRobotsTxt(), 'utf8');
      writeFileSync(path.resolve(distDir, 'sitemap.xml'), buildSitemapXml(), 'utf8');
      writeFileSync(path.resolve(distDir, 'sitemap-images.xml'), buildImageSitemapXml(), 'utf8');
      writeFileSync(path.resolve(distDir, 'humans.txt'), buildHumansTxt(), 'utf8');
    },
  };
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    seoArtifactsPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
    },
    dedupe: ['react', 'react-dom'],
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    target: 'es2020',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          motion: ['framer-motion'],
          wouter: ['wouter'],
          firebase: ['firebase/app'],
          icons: ['lucide-react'],
        },
      },
    },
  },
  server: {
    port: 5173,
    host: '0.0.0.0',
  },
});
