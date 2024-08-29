// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmzlhDZoMpgZJpz3YjsFcWN-MqF46eY7I",
  authDomain: "netflixgpt-3d899.firebaseapp.com",
  projectId: "netflixgpt-3d899",
  storageBucket: "netflixgpt-3d899.appspot.com",
  messagingSenderId: "385106513172",
  appId: "1:385106513172:web:41a117b7c7d7b4a60dc601",
  measurementId: "G-XSKVWHJTR4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();