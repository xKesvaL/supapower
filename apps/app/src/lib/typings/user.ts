export const USER_TYPES = ["member", "creator", "admin"] as const;
export const USER_MEASUREMENTS = ["cm", "in"] as const;
export const USER_DISTANCE = ["km", "mi"] as const;
export const USER_WEIGHT = ["kg", "lbs"] as const;
export const USER_WORKOUT_TYPES = [
  "bodybuilding",
  "powerlifting",
  "powerbuilding",
  "calisthenics",
  "sculpting",
] as const;
export const USER_WORKOUT_EQUIPMENT = ["full_gym", "garage_gym", "dumbbells", "at_home"] as const;
export const USER_WORKOUT_EXPERIENCE = ["beginner", "intermediate", "advanced"] as const;
// eslint-disable-next-line @typescript-eslint/no-magic-numbers
export const USER_WORKOUT_FREQUENCIES = [2, 3, 4, 5, 6];
