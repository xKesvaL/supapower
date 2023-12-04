import type { Handle } from "@sveltejs/kit";

import { languageTag } from "$paraglide/runtime";

export const handle: Handle = async ({ event, resolve }) =>
  await resolve(event, {
    transformPageChunk: ({ html }) => html.replace('lang="en"', `lang=${languageTag()}`),
  });
