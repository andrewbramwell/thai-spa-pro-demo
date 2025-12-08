// src/utils/config.ts
export const MULTILINGUAL = false; // Match your astro.config value
export const DEFAULT_LOCALE = "en";
export const AVAILABLE_LOCALES = MULTILINGUAL ? ["en", "de", "es"] : [DEFAULT_LOCALE];