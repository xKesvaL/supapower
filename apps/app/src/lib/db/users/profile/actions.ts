import type { User } from "firebase/auth";
import { doc, getDoc, writeBatch } from "firebase/firestore";

import { firestore } from "$lib/utils/firebase";
import { languageTag } from "$paraglide/runtime";

import type { RegisterState } from "../firebase/states.svelte";
import { getUsernameReference, getUserProfileReference } from "../utils";
import { UserProfileSchema } from "./schemas";

export const isUsernameUnique = async (username: string): Promise<boolean> =>
  // eslint-disable-next-line unicorn/no-await-expression-member
  !(await getDoc(doc(firestore, "usernames", username))).exists();

export const createUserProfile = async (user: User, data: RegisterState, username: string) => {
  const profileReference = getUserProfileReference(user.uid);

  const userProfile = {
    lang: languageTag(),
    theme: "auto",
    biography: "",
    type: "member",
    units: {
      measurements: "cm",
      distance: "km",
      weight: "kg",
    },
    username,
    workout: {
      frequencies: data.frequencies,
      type: data.goal,
      equipment: data.equipment,
      experience: data.experience,
    },
  };

  const schemaResponse = UserProfileSchema.safeParse(userProfile);

  if (!schemaResponse.success) {
    return schemaResponse.error;
  }

  const usernameReference = getUsernameReference(schemaResponse.data.username);
  const batch = writeBatch(firestore);

  batch.set(profileReference, schemaResponse.data);
  batch.set(usernameReference, { uid: user.uid });

  await batch.commit();

  return schemaResponse.data;
};
