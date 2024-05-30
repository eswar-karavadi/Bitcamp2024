// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsK1KPr1ErUPgytXekTo-g_C6XQfvKD00",
  authDomain: "bitcamp2024.firebaseapp.com",
  databaseURL: "https://bitcamp2024-default-rtdb.firebaseio.com",
  projectId: "bitcamp2024",
  storageBucket: "bitcamp2024.appspot.com",
  messagingSenderId: "30634191907",
  appId: "1:30634191907:web:48c81e68b369abbc645596",
  measurementId: "G-22K3LGH94Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(app);
