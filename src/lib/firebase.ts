import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSpSMdnMwO45k5W6YO5cYa0Hvn-8G0Cuo",
  authDomain: "gita-gloval-family.firebaseapp.com",
  projectId: "gita-gloval-family",
  storageBucket: "gita-gloval-family.firebasestorage.app",
  messagingSenderId: "496882997165",
  appId: "1:496882997165:web:36d222bfbddfbc366ff324",
  measurementId: "G-CHRK01Z7BR",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
