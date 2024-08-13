import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBWqCrlD3epwqpWqFa-Lts_U2SdCEBZEzY",
  authDomain: "sk-dermique.firebaseapp.com",
  projectId: "sk-dermique",
  storageBucket: "sk-dermique.appspot.com",
  messagingSenderId: "396441621213",
  appId: "1:396441621213:web:244286504d98930d708134",
  measurementId: "G-93XKFPRCL5",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);

let analyticsPromise = isSupported()
  .then((supported) => {
    if (supported) {
      return getAnalytics(app);
    } else {
      console.warn("Firebase Analytics is not supported in this environment.");
      return null;
    }
  })
  .catch((error) => {
    console.error("Error initializing Firebase Analytics:", error);
    return null;
  });

export { app, auth, db, database, analyticsPromise };
export const analytics = getAnalytics(app);
