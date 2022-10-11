// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// import firebase from "./firebase";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCBmQOKvU6-e0xIrbXmb271hsNu7lTNDqo",
//   authDomain: "cap-deux.firebaseapp.com",
//   projectId: "cap-deux",
//   storageBucket: "cap-deux.appspot.com",
//   messagingSenderId: "844771141914",
//   appId: "1:844771141914:web:ce537a135adbc588f524a3",
//   measurementId: "G-8MS82CFJZK"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const db = firebase.firestore();
// console.log(db)
  
// export default db;

import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCBmQOKvU6-e0xIrbXmb271hsNu7lTNDqo",
    authDomain: "cap-deux.firebaseapp.com",
    projectId: "cap-deux",
    storageBucket: "cap-deux.appspot.com",
    messagingSenderId: "844771141914",
    appId: "1:844771141914:web:ce537a135adbc588f524a3",
    measurementId: "G-8MS82CFJZK"
  };

firebase.initializeApp(firebaseConfig);




export default firebase;