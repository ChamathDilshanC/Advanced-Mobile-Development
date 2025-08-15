// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/web-extension";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //TODO : Add Your Firebase Details 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
