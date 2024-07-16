// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCG1jNDDv-23T1zMMO2G-aFMXFDF43J9z8",
  authDomain: "gaming-app-55e13.firebaseapp.com",
  projectId: "gaming-app-55e13",
  storageBucket: "gaming-app-55e13.appspot.com",
  messagingSenderId: "967517322258",
  appId: "1:967517322258:web:d2f1e89a399118fa80eccb",
  measurementId: "G-J8LHMWHTR7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

