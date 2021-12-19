import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,signOut } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, addDoc, collection, getDocs, query,where } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
const firebaseApp = initializeApp({
    apiKey: "AIzaSyB0EyG2Pk5B6bQJwHYkNqetpbW6OGuTafY",
  authDomain: "hackathon-project-react-native.firebaseapp.com",
  projectId: "hackathon-project-react-native",
  storageBucket: "hackathon-project-react-native.appspot.com",
  messagingSenderId: "797032210021",
  appId: "1:797032210021:web:36737a277391dd2a33308c",
  measurementId: "G-NPG3BH2WHS"
});

const auth = getAuth();
const db = getFirestore();
const storage = getStorage(firebaseApp);

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,

    db,
    doc,
    setDoc,
    getDoc,
    addDoc,
    collection,
    getDocs,
    query,
    where,
    ref,
    uploadBytes,
     getDownloadURL,
     signOut
};