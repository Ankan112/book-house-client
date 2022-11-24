// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    // apiKey: "AIzaSyB1T_SQcqeYYoCZlJA9H6cnBgzzGTsjtXY",
    // authDomain: "book-house-bd.firebaseapp.com",
    // projectId: "book-house-bd",
    // storageBucket: "book-house-bd.appspot.com",
    // messagingSenderId: "183365429682",
    // appId: "1:183365429682:web:baf3f1d0c24a76cf339cab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;