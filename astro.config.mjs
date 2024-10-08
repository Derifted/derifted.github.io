import { defineConfig } from 'astro/config';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  vite: {
    server: {
      fs: {
        allow: ['E:/Derifted/Site/'],
      },
    },
  }
});