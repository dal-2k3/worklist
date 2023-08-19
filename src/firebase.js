import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC3ZtX4aCDKK39EzV_9Ucrcy39maoljFA0",
  authDomain: "pro--worklist-4b163.firebaseapp.com",
  databaseURL: "https://pro--worklist-4b163-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pro--worklist-4b163",
  storageBucket: "pro--worklist-4b163.appspot.com",
  messagingSenderId: "796104219114",
  appId: "1:796104219114:web:94228275750cfcbca27a93"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
