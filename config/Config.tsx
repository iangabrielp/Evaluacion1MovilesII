
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAVD-sVJjUN2kARj0NDKGQXpyCuIzW3pYU",
  authDomain: "evaluacion-1-b15ae.firebaseapp.com",
  databaseURL: "https://evaluacion-1-b15ae-default-rtdb.firebaseio.com",
  projectId: "evaluacion-1-b15ae",
  storageBucket: "evaluacion-1-b15ae.firebasestorage.app",
  messagingSenderId: "187038359117",
  appId: "1:187038359117:web:814226013f742637e90604"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getDatabase(app)