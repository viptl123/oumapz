// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIg7M-S34qJfxO3PCEz7DMKu7rty-Oyqw",
  authDomain: "ou-mapz.firebaseapp.com",
  projectId: "ou-mapz",
  storageBucket: "ou-mapz.appspot.com",
  messagingSenderId: "526498569132",
  appId: "1:526498569132:web:aaa5242f24381da906f809",
  measurementId: "G-5GHXE5WJTL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
export {auth, app, db};

