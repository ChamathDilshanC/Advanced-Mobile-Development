import { auth } from "@/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth/cordova"

export const registerUser = (email : string , password : string) =>{
  return createUserWithEmailAndPassword(auth, email, password);
}

export const loginUser = (email : string , password : string) => {
  return signInWithEmailAndPassword(auth, email, password);
}

export const logoutUser = () => {
  return auth.signOut();
}
