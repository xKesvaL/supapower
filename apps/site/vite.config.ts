import { enhancedImages } from "@sveltejs/enhanced-img";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { kitRoutes } from "vite-plugin-kit-routes";

import type { KIT_ROUTES } from "$lib/ROUTES";

export default defineConfig({
  plugins: [
    enhancedImages(),
    sveltekit(),
    kitRoutes<KIT_ROUTES>({
      format: "route(path)",
    }),
  ],

  resolve: {
    alias: {
      $assets: "./src/assets",
      $routes: "./src/routes",
    },
  },
});
