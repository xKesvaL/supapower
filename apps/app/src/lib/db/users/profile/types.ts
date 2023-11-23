import type * as z from "zod";

import type { UserProfileSchema } from "./schemas";

export type UserProfile = z.infer<typeof UserProfileSchema>;
