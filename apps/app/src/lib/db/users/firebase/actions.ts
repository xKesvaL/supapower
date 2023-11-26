import { signInWithEmailAndPassword } from "firebase/auth";
import type { AuthResponse } from "./types";
import { auth } from "$lib/utils/firebase";

export const authLoginWithPassword = async (
  email: string,
  password: string,
): Promise<AuthResponse> => {
  let res: AuthResponse = {
    success: false,
  };

  await signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      res = {
        success: true,
      };
    })
    .catch((e) => {
      console.error(e);
      res = {
        success: false,
        error: {
          code: e.code.replaceAll("-", "_").replaceAll("/", "_"),
          type: "login",
        },
      };
    });

  return res;
};
