// Import the functions you need from the SDKs you need
import { deleteApp, getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8PWHDk7iBx05D6XHmCNYwDTrBDXd5D3I",
    authDomain: "sveltekit-fullstack-5d4f4.firebaseapp.com",
    projectId: "sveltekit-fullstack-5d4f4",
    storageBucket: "sveltekit-fullstack-5d4f4.appspot.com",
    messagingSenderId: "761377685567",
    appId: "1:761377685567:web:bcac36f5b6e23fd2e4f88a"
};

// Initialize Firebase
let firebaseApp;
if (!getApps().length) {
    firebaseApp = initializeApp(firebaseConfig)
} else {
    firebaseApp = getApp()
    deleteApp(firebaseApp)
    firebaseApp = initializeApp(firebaseConfig)
}

export const db = getFirestore(firebaseApp)
export const auth = getAuth(firebaseApp)