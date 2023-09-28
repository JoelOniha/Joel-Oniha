// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuSVmg0kWNPUcMe1LBZcw5L6mdW_D-_Oc",
  authDomain: "task-list-2023.firebaseapp.com",
  projectId: "task-list-2023",
  storageBucket: "task-list-2023.appspot.com",
  messagingSenderId: "93357571527",
  appId: "1:93357571527:web:01eebbccc5915ad46a6de2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};