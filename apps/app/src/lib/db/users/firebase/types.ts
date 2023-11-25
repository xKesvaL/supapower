import type { User } from "firebase/auth";
import type { Readable } from "svelte/store";

export type AuthType = "login" | "popup" | "reauth" | "register";

export interface AuthErrorBase {
  type: AuthType;
}

export type AuthErrorCodeLogin =
  | "auth/invalid-email"
  | "auth/user-disabled"
  | "auth/user-not-found"
  | "auth/wrong-password";

export type AuthErrorCodeRegister =
  | "auth/email-already-in-use"
  | "auth/invalid-email"
  | "auth/operation-not-allowed"
  | "auth/weak-password";

export type AuthErrorCodeReauth =
  | "auth/invalid-credential"
  | "auth/invalid-email"
  | "auth/invalid-verification-code"
  | "auth/invalid-verification-id"
  | "auth/user-mismatch"
  | "auth/user-not-found"
  | "auth/wrong-password";

export type AuthErrorCodePopup =
  | "auth/account-exists-with-different-credential"
  | "auth/auth-domain-config-required"
  | "auth/cancelled-popup-request"
  | "auth/operation-not-allowed"
  | "auth/operation-not-supported-in-this-environment"
  | "auth/popup-blocked"
  | "auth/popup-closed-by-user"
  | "auth/unauthorized-domain";

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
