// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcAyUglatcCRJcjwKghZcQEskbVIB_ASo",
  authDomain: "todo-app-c98ff.firebaseapp.com",
  projectId: "todo-app-c98ff",
  storageBucket: "todo-app-c98ff.appspot.com",
  messagingSenderId: "363255950565",
  appId: "1:363255950565:web:d0011c10a0f6e11c00b80c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);