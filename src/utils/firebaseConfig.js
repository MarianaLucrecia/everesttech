// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzO0_GLIoP_5A--B56d1SL0RcbpqUZULA",
  authDomain: "e-commerce-everest.firebaseapp.com",
  projectId: "e-commerce-everest",
  storageBucket: "e-commerce-everest.appspot.com",
  messagingSenderId: "343654552048",
  appId: "1:343654552048:web:f7bd8225494aaeac578d35",
  measurementId: "G-XFC6427TMK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;