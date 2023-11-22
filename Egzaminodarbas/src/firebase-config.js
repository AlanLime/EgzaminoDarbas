// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyATAdG9QpSzUx1ltuoDSui_5ZdVUNEdLqo",
    authDomain: "eshop2-653f7.firebaseapp.com",
    projectId: "eshop2-653f7",
    storageBucket: "eshop2-653f7.appspot.com",
    messagingSenderId: "915279591471",
    appId: "1:915279591471:web:2d8ff48ebd6d40bf61eeda",
    measurementId: "G-7NBGNQSDVJ"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();