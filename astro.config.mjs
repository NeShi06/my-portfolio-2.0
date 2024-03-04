import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), tailwind(), solidJs()],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  output: 'hybrid',
  adapter: netlify()
});