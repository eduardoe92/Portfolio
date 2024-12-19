import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://eduardoeliaschacon-portfolio.vercel.app/',
  integrations: [tailwind(), robotsTxt()],
  vite: {
    ssr: {
      noExternal: ['@fontsource-variable/onest'], // Agrega aquí el paquete problemático
    },
  },
});
