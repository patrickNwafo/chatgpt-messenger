import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4iXib7Vdv9sKq5xA1-RS9Q6rxw08ixRA",
  authDomain: "chatgpt-messenger-ty-a7f71.firebaseapp.com",
  projectId: "chatgpt-messenger-ty-a7f71",
  storageBucket: "chatgpt-messenger-ty-a7f71.appspot.com",
  messagingSenderId: "723987941554",
  appId: "1:723987941554:web:5d0491fef2d8c9a73821ab",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
