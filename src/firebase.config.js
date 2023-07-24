// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaAmjWMz-MZq8SYO7hsiLxikkANjSU0gA",
  authDomain: "test1-task.firebaseapp.com",
  projectId: "test1-task",
  storageBucket: "test1-task.appspot.com",
  messagingSenderId: "592132124610",
  appId: "1:592132124610:web:e35f31b8afd31f4048f05b",
  measurementId: "G-Q7E4N865KB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app