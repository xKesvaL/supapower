import { enhancedImages } from "@sveltejs/enhanced-img";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { kitRoutes } from "vite-plugin-kit-routes";
import { watch } from "vite-plugin-watch";

import type { KIT_ROUTES } from "$lib/ROUTES";

export default defineConfig({
  plugins: [
    enhancedImages(),
    sveltekit(),
    kitRoutes<KIT_ROUTES>({
      extra_search_params: "with",
      format: "_",
    }),
    watch({
      pattern: "src/lang",
      command: "paraglide-js compile --project ./project.inlang.json",
    }),
  ],

  resolve: {
    alias: {
      $assets: "./src/assets",
      $routes: "./src/routes",
      $paraglide: "./src/paraglide",
    },
  },
});
