// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsdhTXCJAmHFED0r88sl0N_GBA9q5dZzA",
  authDomain: "skill-seller.firebaseapp.com",
  projectId: "skill-seller",
  storageBucket: "skill-seller.firebasestorage.app",
  messagingSenderId: "728488233635",
  appId: "1:728488233635:web:ac23d80635e036f7878d16"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 
 export default app