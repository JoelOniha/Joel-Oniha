// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8qrLDcXnGHO1ce2p2IMJwWQQHO7lIwMo",
  authDomain: "video-game2023.firebaseapp.com",
  projectId: "video-game2023",
  storageBucket: "video-game2023.appspot.com",
  messagingSenderId: "40387051607",
  appId: "1:40387051607:web:42ef1d213ab0005088a312"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export {db, storage, auth};