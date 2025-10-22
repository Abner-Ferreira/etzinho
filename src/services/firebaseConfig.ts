// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl1XQpk8ik4SFIJ8XqRRqNl1Z94eNDSok",
  authDomain: "etzinhho.firebaseapp.com",
  projectId: "etzinhho",
  storageBucket: "etzinhho.firebasestorage.app",
  messagingSenderId: "317535484679",
  appId: "1:317535484679:web:68b743842d21b2ab5563a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);