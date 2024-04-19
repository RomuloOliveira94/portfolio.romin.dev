import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: "https://romin.dev.br/",
  i18n: {
    defaultLocale: "pt-br",
    locales: ["en", "es", "pt-br"]
  },
  output: "server",
  adapter: netlify()
});