// app/styles/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, doc } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4GvdAWhMxZ2It7KNUxas_WtcTi5vurnw",
    authDomain: "mobilepaluwagan.firebaseapp.com",
    projectId: "mobilepaluwagan",
    storageBucket: "mobilepaluwagan.firebasestorage.app",
    messagingSenderId: "130536525058",
    appId: "1:130536525058:web:af26a65f9807830ed6c61b"
  };

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

// ✅ Export services
export { auth, db, signInWithEmailAndPassword, createUserWithEmailAndPassword, doc };

// ✅ Default export
export default app;