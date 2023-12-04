import { doc } from "firebase/firestore";

import { firestore } from "$lib/utils/firebase";

export const getUserProfileReference = (uid: string) => doc(firestore, `users/${uid}/profile/data`);

export const getUserPrivateReference = (uid: string) => doc(firestore, `users/${uid}/private/data`);

export const getUserMeasuresReference = (uid: string) =>
  doc(firestore, `users/${uid}/measures/data`);

export const getUsernameReference = (username: string) => doc(firestore, `usernames/${username}`);
