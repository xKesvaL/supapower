import type { User } from "firebase/auth";
import type { Readable } from "svelte/store";

export type AuthType = "login" | "popup" | "reauth" | "register";

export interface AuthErrorBase {
  type: AuthType;
}

export type AuthErrorCodeLogin =
  | "auth_invalid_email"
  | "auth_invalid_login_credentials"
  | "auth_user_disabled"
  | "auth_user_not_found"
  | "auth_wrong_password";

export type AuthErrorCodeRegister =
  | "auth_email_already_in_use"
  | "auth_invalid_email"
  | "auth_operation_not_allowed"
  | "auth_weak_password";

export type AuthErrorCodeReauth =
  | "auth_invalid_credential"
  | "auth_invalid_email"
  | "auth_invalid_verification_code"
  | "auth_invalid_verification_id"
  | "auth_user_mismatch"
  | "auth_user_not_found"
  | "auth_wrong_password";

export type AuthErrorCodePopup =
  | "auth_account_exists_with_different_credential"
  | "auth_auth_domain_config_required"
  | "auth_cancelled_popup_request"
  | "auth_operation_not_allowed"
  | "auth_operation_not_supported_in_this_environment"
  | "auth_popup_blocked"
  | "auth_popup_closed_by_user"
  | "auth_unauthorized_domain";

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
