import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = ({ locals }) => {
  const { lang } = locals;

  return {
    lang,
  };
};
