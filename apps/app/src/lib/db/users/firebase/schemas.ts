/* eslint-disable camelcase */
import * as z from "zod";

import { AUTH_PASSWORD_MAX_LENGTH, AUTH_PASSWORD_MIN_LENGTH } from "./types";

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
    .min(AUTH_PASSWORD_MIN_LENGTH, {
      message: "auth_error_password_min",
    })
    .max(AUTH_PASSWORD_MAX_LENGTH, {
      message: "auth_error_password_max",
    }),
});
