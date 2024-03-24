import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyGGHh1UPNE8UoJfQmN43H364ADbnr5mA",
  authDomain: "locotes-indumentaria.firebaseapp.com",
  projectId: "locotes-indumentaria",
  storageBucket: "locotes-indumentaria.appspot.com",
  messagingSenderId: "852489451722",
  appId: "1:852489451722:web:82326f8292ca48e2b69c33",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
