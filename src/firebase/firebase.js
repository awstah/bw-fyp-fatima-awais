import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2z8TJSWrPflMmODZWKjqsHCupSDlijdY",
  authDomain: "aw-buzzinesware.firebaseapp.com",
  projectId: "aw-buzzinesware",
  storageBucket: "aw-buzzinesware.appspot.com",
  messagingSenderId: "74979699808",
  appId: "1:74979699808:web:1890bcfdc1951a4c926705",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const auth = firebase.auth();
const employAuth = firebase.auth();

// const googleProvider = new firebase.auth.GoogleAuthProvider();
// const facebookProvider = new firebase.auth.FacebookAuthProvider();

const db = firebase.firestore();

export { auth, employAuth };
export default db;
