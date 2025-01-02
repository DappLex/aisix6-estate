// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "fir-cdeeb.firebaseapp.com",
  projectId: "fir-cdeeb",
  storageBucket: "fir-cdeeb.appspot.com",
  messagingSenderId: "481616104779",
  appId: "1:481616104779:web:0cd5d3e5f86b7f4e4c2cce"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);