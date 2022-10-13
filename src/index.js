// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrV8vA_-zrdrwzMFPOhxyo-NEoN9py4cQ",
  authDomain: "front-end-bouquet.firebaseapp.com",
  projectId: "front-end-bouquet",
  storageBucket: "front-end-bouquet.appspot.com",
  messagingSenderId: "444096727603",
  appId: "1:444096727603:web:eafb5da91d82b5ec847146",
  measurementId: "G-04QYY877TJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);