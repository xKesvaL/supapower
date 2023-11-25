/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable camelcase */
import * as z from "zod";

export const UserFirebaseSchema = z.object({
  email: z
    .string({
      required_error: "auth_error_email_required",
      invalid_type_error: "auth_error_email_invalid",
    })
    .email({
      message: "auth_error_email_invalid",
    }),
  password: z
    .string({
      required_error: "auth_error_password_required",
      invalid_type_error: "auth_error_password_invalid",
    })
    .min(8, {
      message: "auth_error_password_min",
    })
    .max(32, {
      message: "auth_error_password_max",
    }),
});
