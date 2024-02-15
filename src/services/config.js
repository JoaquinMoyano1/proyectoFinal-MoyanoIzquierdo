
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE_CONFIG,
  authDomain: "tpfinalensayo.firebaseapp.com",
  projectId: "tpfinalensayo",
  storageBucket: "tpfinalensayo.appspot.com",
  messagingSenderId: "404528421159",
  appId: "1:404528421159:web:2693d54538393c71adb102"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);