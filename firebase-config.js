// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFLXY0gDafvmXFRbA8eGfrl7P03NmKSbU",
  authDomain: "finance-app-4ef07.firebaseapp.com",
  projectId: "finance-app-4ef07",
  storageBucket: "finance-app-4ef07.appspot.com",
  messagingSenderId: "409720464741",
  appId: "1:409720464741:web:9167493dcd243d84e22d8c",
  measurementId: "G-DWC0F4CVEM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
