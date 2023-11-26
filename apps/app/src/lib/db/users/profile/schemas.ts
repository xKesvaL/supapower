import * as z from "zod";

import { LOCALES } from "$lib/CONFIG";
import {
  USER_DISTANCE,
  USER_EQUIPMENT,
  USER_EXPERIENCE,
  USER_MEASUREMENTS,
  USER_TYPES,
  USER_WEIGHT,
  USER_WORKOUT_TYPES,
} from "$lib/typings/user";

export const UserProfileSchema = z.object({
  lang: z.enum(LOCALES),
  theme: z.enum(["light", "dark", "auto"] as const),
  biography: z.string(),
  type: z.enum(USER_TYPES),
  units: z.object({
    measurements: z.enum(USER_MEASUREMENTS),
    distance: z.enum(USER_DISTANCE),
    weight: z.enum(USER_WEIGHT),
  }),
  username: z.string(),
  workout: z.object({
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    frequencies: z.array(z.number().gte(2).lte(6)).max(3).min(1),
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    types: z.array(z.enum(USER_WORKOUT_TYPES)).max(3).min(1),
    equipment: z.enum(USER_EQUIPMENT),
    experience: z.enum(USER_EXPERIENCE),
  }),
});
