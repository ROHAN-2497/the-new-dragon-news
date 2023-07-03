// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXj0mdhMgEvtPL1R8P3ZRVB8ZNOSCD84k",
  authDomain: "the-newss-dragon.firebaseapp.com",
  projectId: "the-newss-dragon",
  storageBucket: "the-newss-dragon.appspot.com",
  messagingSenderId: "786419807017",
  appId: "1:786419807017:web:930fac701a31b17f5fbd38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;