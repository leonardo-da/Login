// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdZ-NAwn1bJd1sc_ORazoPqgrI9JwAF5Y",
  authDomain: "login-d805b.firebaseapp.com",
  projectId: "login-d805b",
  storageBucket: "login-d805b.appspot.com",
  messagingSenderId: "858502531338",
  appId: "1:858502531338:web:ec4a38523473d0a890d2f3",
  measurementId: "G-SY75J8293Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)