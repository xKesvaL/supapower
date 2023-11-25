import { PAGES } from "$lib/ROUTES.js";

import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = ({ url }) => {
  // eslint-disable-next-line no-underscore-dangle
  const frel = url.searchParams.get("frel") ?? PAGES._ROOT();

  return {
    frel,
  };
};
