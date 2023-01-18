import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDlQAyxApBr1Gpn8DHBksz7m1Wo7w7Fns0",
    authDomain: "pvp-tracker.firebaseapp.com",
    projectId: "pvp-tracker",
    storageBucket: "pvp-tracker.appspot.com",
    messagingSenderId: "850807925403",
    appId: "1:850807925403:web:ae4088db79f4f9fc72743e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);