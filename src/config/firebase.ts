// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBput0xUUmVCMBe-i0Qb3J7Vl-N4tNi_FE",
  authDomain: "react-crud-ce9a1.firebaseapp.com",
  projectId: "react-crud-ce9a1",
  storageBucket: "react-crud-ce9a1.appspot.com",
  messagingSenderId: "66846245898",
  appId: "1:66846245898:web:41a622a3f8251ec17a8bf3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)