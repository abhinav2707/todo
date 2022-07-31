import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB7U0fJTKvjoZqllZHU-PG_tCc0AjvsVt0",
    authDomain: "todo-firebase-eddc6.firebaseapp.com",
    projectId: "todo-firebase-eddc6",
    storageBucket: "todo-firebase-eddc6.appspot.com",
    messagingSenderId: "1011915173694",
    appId: "1:1011915173694:web:1a75209a73c06fdb09c66f"
  };

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

export { db };