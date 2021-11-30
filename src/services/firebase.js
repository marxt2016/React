import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAdcO4rYMa5oux9R95gZf3fOOcHUDemvR0",
    authDomain: "chtas-gb.firebaseapp.com",
    projectId: "chtas-gb",
    storageBucket: "chtas-gb.appspot.com",
    messagingSenderId: "22554213001",
    appId: "1:22554213001:web:40d9b34f6c73468b602458"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const signUp = async (email, password) =>
    await createUserWithEmailAndPassword(auth, email, password);

export const logIn = async (email, password) =>
    await signInWithEmailAndPassword(auth, email, password);

export const logOut = async () => await signOut(auth);