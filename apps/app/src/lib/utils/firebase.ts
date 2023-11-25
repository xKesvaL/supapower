import { initializeApp } from "firebase/app";
import { browserLocalPersistence, initializeAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKh4v4pcGfgrIwPoHW_9BFHvZENXOuXac",
  authDomain: "app-leetstrength-com.firebaseapp.com",
  projectId: "app-leetstrength-com",
  storageBucket: "app-leetstrength-com.appspot.com",
  messagingSenderId: "1066808563442",
  appId: "1:1066808563442:web:8899486f6f3c67f173e26b",
  measurementId: "G-K4L0KKWXPD",
};

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: browserLocalPersistence,
});
