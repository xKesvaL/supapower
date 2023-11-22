import type * as z from "zod";
import type { UserMeasuresSchemas } from "./schemas";

export type UserMeasures = z.infer<typeof UserMeasuresSchemas>;
