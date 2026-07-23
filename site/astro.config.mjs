// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Pas d'intégration sitemap / SEO ici : le référencement se traite dans une
// passe dédiée, après validation de la maquette (cf. CLAUDE.md §7).
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
