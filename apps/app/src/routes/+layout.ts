import { route } from "$lib/ROUTES.js";

import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = ({ url }) => {
  const frel = url.searchParams.get("frel") ?? route("/");

  return {
    frel,
  };
};
