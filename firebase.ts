// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMCn27C-9IzKYfAX3NGUkcDvBAYnzXzf4",
  authDomain: "taskmanagerapplication-8c289.firebaseapp.com",
  projectId: "taskmanagerapplication-8c289",
  storageBucket: "taskmanagerapplication-8c289.firebasestorage.app",
  messagingSenderId: "111384695112",
  appId: "1:111384695112:web:b7464d17c2e8823381a37d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Firestore and get a reference to the service
export const db = getFirestore(app);
