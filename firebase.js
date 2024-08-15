// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBltYFreIb3KxibwIVAYtb4PPnh-QUekBI",
  authDomain: "flashcard-df29a.firebaseapp.com",
  projectId: "flashcard-df29a",
  storageBucket: "flashcard-df29a.appspot.com",
  messagingSenderId: "132529952693",
  appId: "1:132529952693:web:4f171b6e37dc894f786bfc",
  measurementId: "G-V67DPLSFSB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}