// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCd9oZ3X6h2dJ6wxtFu4DlC0rhUzlAWstU",
  authDomain: "partymatch-ae2c0.firebaseapp.com",
  projectId: "partymatch-ae2c0",
  storageBucket: "partymatch-ae2c0.appspot.com",
  messagingSenderId: "282530624432",
  appId: "1:282530624432:web:d838ce28bea85344519c75",
  measurementId: "G-DMRGY3TRDF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { auth, db };