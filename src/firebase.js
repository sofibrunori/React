import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCM-oM7uEtRKn12haqwlCNA6v0TPM16tHs",
  authDomain: "imprimideco-proyectoreact.firebaseapp.com",
  projectId: "imprimideco-proyectoreact",
  storageBucket: "imprimideco-proyectoreact.firebasestorage.app",
  messagingSenderId: "788459151902",
  appId: "1:788459151902:web:b4c06bfccf59f3e8c5c40f",
  measurementId: "G-7PK3R0CRVE",
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
