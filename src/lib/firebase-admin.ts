import { initializeApp, getApps, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";

if (getApps().length === 0) {
  initializeApp({
    credential: applicationDefault(),
    projectId: "gita-gloval-family",
  });
}

export const adminDb = getFirestore();
export const adminAuth = getAuth();
