// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDss7Rf8ZWx8aFsZF7Xd7pzLS7luU9SHVY",
  authDomain: "profile-fe6e3.firebaseapp.com",
  projectId: "profile-fe6e3",
  storageBucket: "profile-fe6e3.firebasestorage.app",
  messagingSenderId: "1084877153606",
  appId: "1:1084877153606:web:130eee8106b3bbdd7a7147"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)