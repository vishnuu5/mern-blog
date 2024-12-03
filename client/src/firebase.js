// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-74bbd.firebaseapp.com",
  projectId: "mern-blog-74bbd",
  storageBucket: "mern-blog-74bbd.firebasestorage.app",
  messagingSenderId: "378870069791",
  appId: "1:378870069791:web:a5810dd8d6370dfcac732a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
