import type { User } from "firebase/auth";
import type { Readable } from "svelte/store";

export type AuthType = "login" | "popup" | "reauth" | "register";

export interface AuthErrorBase {
  type: AuthType;
}

export type AuthErrorCodeLogin =
  | "auth/invalid_email"
  | "auth/user_disabled"
  | "auth/user_not_found"
  | "auth/wrong_password";

export type AuthErrorCodeRegister =
  | "auth/email_already_in_use"
  | "auth/invalid_email"
  | "auth/operation_not_allowed"
  | "auth/weak_password";

export type AuthErrorCodeReauth =
  | "auth/invalid_credential"
  | "auth/invalid_email"
  | "auth/invalid_verification_code"
  | "auth/invalid_verification_id"
  | "auth/user_mismatch"
  | "auth/user_not_found"
  | "auth/wrong_password";

export type AuthErrorCodePopup =
  | "auth/account_exists_with_different_credential"
  | "auth/auth_domain_config_required"
  | "auth/cancelled_popup_request"
  | "auth/operation_not_allowed"
  | "auth/operation_not_supported_in_this_environment"
  | "auth/popup_blocked"
  | "auth/popup_closed_by_user"
  | "auth/unauthorized_domain";

export type UserStore = Readable<User | null | undefined>;

export type UserStoreContext = Readable<User>;

export interface AuthErrorLogin extends AuthErrorBase {
  code: AuthErrorCodeLogin;
  type: "login";
}

export interface AuthErrorRegister extends AuthErrorBase {
  code: AuthErrorCodeRegister;
  type: "register";
}

export interface AuthErrorPopup extends AuthErrorBase {
  code: AuthErrorCodePopup;
  type: "popup";
}

export type AuthError = AuthErrorLogin | AuthErrorPopup | AuthErrorRegister;

export interface AuthResponse {
  error?: AuthError;
  success: boolean;
}

export const AUTH_PASSWORD_MIN_LENGTH = 8;
export const AUTH_PASSWORD_MAX_LENGTH = 32;
