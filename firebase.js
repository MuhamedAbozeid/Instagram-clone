// Import the functions you need from the SDKs you need
import { initializeApp , getApps, getApp} from "firebase/app";
import { getFirestore } from "firebase/firestore" ;
import { getStorage } from "firebase/storage" ;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjqAg7pfexeLwTn-gQzHVGRmP0nlQkMwk",
  authDomain: "instagram-clone-4ddaf.firebaseapp.com",
  projectId: "instagram-clone-4ddaf",
  storageBucket: "instagram-clone-4ddaf.appspot.com",
  messagingSenderId: "134874888673",
  appId: "1:134874888673:web:16a7302c433d7a9c96faa0"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };