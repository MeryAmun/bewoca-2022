// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATy_EI4JKu5u8r9hGx_o7j60gJbgLz1ck",
  authDomain: "bewoca-da3aa.firebaseapp.com",
  projectId: "bewoca-da3aa",
  storageBucket: "bewoca-da3aa.appspot.com",
  messagingSenderId: "758965558100",
  appId: "1:758965558100:web:6241fd9b3ba04fa975c6c1",
  measurementId: "G-27WEYJQVT5"
};
//gsutil cors set cors.json gs://bewoca-da3aa.appspot.com
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);

export { db, auth, storage };