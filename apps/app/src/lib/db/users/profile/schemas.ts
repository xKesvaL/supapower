import * as z from "zod";

import { LOCALES } from "$lib/CONFIG";

const TYPE = ["member", "creator", "admin"]  as const;
const MEASUREMENTS = ["cm", "in"] as const;
const DISTANCE = ["km", "mi"] as const;
const WEIGHT = ["kg", "lbs"] as const;
const TYPES = ["bodybuilding", "powerlifting", "powerbuilding", "calisthenics", "sculpting"] as const;

export const UserProfileSchema = z.object({
    lang: z.union(Array.from(LOCALES.map(lang => z.literal(lang))) as never as readonly [z.ZodTypeAny, z.ZodTypeAny, ...z.ZodTypeAny[]]),
    biography: z.string(),
    type: z.enum(TYPE),
    units: z.object({
        measurements: z.enum(MEASUREMENTS),
        distance: z.enum(DISTANCE),
        weight: z.enum(WEIGHT)
    }),
    username: z.string(),
    workout: z.object({
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        frequencies: z.array(z.number().gte(2).lte(6)).max(3).min(1),
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        types: z.array(z.enum(TYPES)).max(3).min(1)
    })
});
