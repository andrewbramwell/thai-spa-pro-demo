import { defineConfig } from "astro/config";
import icon from "astro-icon";
import i18n from "@astrolicious/i18n";
import sitemap from "@astrojs/sitemap";

// ========================================
// MULTILINGUAL CONFIGURATION
// Set to true for multilingual sites, false for single language
// ========================================
const MULTILINGUAL = true; // false for single language websites!

// Language configuration
const DEFAULT_LOCALE = "en";
const AVAILABLE_LOCALES = MULTILINGUAL ? ["en", "de", "es", "fr"] : [DEFAULT_LOCALE]; // remove redundant languages from language switch!

// Sitemap i18n config (only used if MULTILINGUAL is true)
const SITEMAP_I18N = MULTILINGUAL ? {
  defaultLocale: DEFAULT_LOCALE,
  locales: {
    en: 'en-US',
    de: 'de-DE',
    es: 'es-ES',
    fr: 'fr-FR', // remove redundant languages from sitemap!
  },
} : undefined;

export default defineConfig({
  site: "https://www.yourwebsite.com", // update me!
  integrations: [
    icon(),
    i18n({
      defaultLocale: DEFAULT_LOCALE,
      locales: AVAILABLE_LOCALES,
      client: {
        data: true,
        paths: true,
      },
    }),
    sitemap({
      ...(SITEMAP_I18N && { i18n: SITEMAP_I18N }),
    }),
  ],
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `@import "${process.cwd()}/src/styles/config.less";`
        }
      }
    }
  }
});
