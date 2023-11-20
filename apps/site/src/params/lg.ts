import type { ParamMatcher } from "@sveltejs/kit";

import { LOCALES } from "$lib/CONFIG";

export const match: ParamMatcher = (parameter) => LOCALES.includes(parameter);
