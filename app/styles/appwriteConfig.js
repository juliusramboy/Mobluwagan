import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword  } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA4GvdAWhMxZ2It7KNUxas_WtcTi5vurnw",
    authDomain: "mobilepaluwagan.firebaseapp.com",
    projectId: "mobilepaluwagan",
    storageBucket: "mobilepaluwagan.firebasestorage.app",
    messagingSenderId: "130536525058",
    appId: "1:130536525058:web:af26a65f9807830ed6c61b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword  };
