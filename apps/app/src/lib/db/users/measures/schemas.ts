import * as z from "zod";

export const UserMeasuresSchema = z.object({
  weight: z.number(),
  waist: z.number(),
  bodyFat: z.number(),
  chest: z.number(),
  bicepLeft: z.number(),
  bicepRight: z.number(),
  forearmLeft: z.number(),
  forearmRight: z.number(),
  abdomen: z.number(),
  thighLeft: z.number(),
  thighRight: z.number(),
  calfLeft: z.number(),
  calfRight: z.number(),
  hips: z.number(),
  neck: z.number(),
  shoulder: z.number(),
});
