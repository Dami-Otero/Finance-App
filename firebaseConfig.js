// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5Ynp2XOxal4oSQS5eAKrSCzQvT7cQiwI",
  authDomain: "finalproj-cc321.firebaseapp.com",
  projectId: "finalproj-cc321",
  storageBucket: "finalproj-cc321.appspot.com",
  messagingSenderId: "664655353422",
  appId: "1:664655353422:web:f4cb12530c557a5eb7d51f",
  measurementId: "G-XHVN65YXNP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);