import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyANLFGU5vGdIM8uIh0yxQDag-E9OpC3Yvc",
  authDomain: "lostoritos-45ac4.firebaseapp.com",
  projectId: "lostoritos-45ac4",
  storageBucket: "lostoritos-45ac4.appspot.com",
  messagingSenderId: "1035518680550",
  appId: "1:1035518680550:web:282d4648c925d509d28a27"
};

export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);