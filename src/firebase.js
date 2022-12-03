import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXnxY3RdmHY3V7vK0QEPaHFG-94DK2SNY",
  authDomain: "chat-7216b.firebaseapp.com",
  projectId: "chat-7216b",
  storageBucket: "chat-7216b.appspot.com",
  messagingSenderId: "961929882649",
  appId: "1:961929882649:web:e170b9028e722288974e88",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();

export const db = getFirestore()