import { initializeApp } from "firebase/app";
import { getAuth , FacebookAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCrC3FM_L-wjCkN9zKJIpGtjLo48iwHqLo",
  authDomain: "next-finaluri.firebaseapp.com",
  projectId: "next-finaluri",
  storageBucket: "next-finaluri.firebasestorage.app",
  messagingSenderId: "699341056950",
  appId: "1:699341056950:web:1f3e9d80d619a69ae42f17",
  measurementId: "G-YYDT5P121X"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new FacebookAuthProvider();

export { auth, provider };