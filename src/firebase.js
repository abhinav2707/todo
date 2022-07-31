// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBisVm5IzFbNWyN4EHYWQqm390-IQwU9zY",
  authDomain: "todos-1f12c.firebaseapp.com",
  projectId: "todos-1f12c",
  storageBucket: "todos-1f12c.appspot.com",
  messagingSenderId: "617489376126",
  appId: "1:617489376126:web:4dfde4148fac90426a492f",
  measurementId: "G-B19HK12WR7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
