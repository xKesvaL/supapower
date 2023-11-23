import type * as z from "zod";

import type { UserMeasuresSchema } from "./schemas";

export type UserMeasures = z.infer<typeof UserMeasuresSchema>;
