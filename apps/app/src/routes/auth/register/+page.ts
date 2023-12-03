import type { MetaTagsProps } from "svelte-meta-tags";

import { getI18n } from "$lib/utils/functions";

export const load = () => {
  const metaTags: MetaTagsProps = {
    title: getI18n("register_title"),
  };

  return {
    metaTags,
  };
};
