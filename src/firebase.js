import firebase from "firebase/compat/app";

//Changes for firebase import statement syntax due to version compatability




import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCl_olv-3_Z0hxPEH3JB-1J9Y5f_lGpIg0",
    authDomain: "clone-1a58d.firebaseapp.com",
    projectId: "clone-1a58d",
    storageBucket: "clone-1a58d.appspot.com",
    messagingSenderId: "323336635613",
    appId: "1:323336635613:web:c4a2e19f894905fa988734",
    measurementId: "G-TXJHV3CM59"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };