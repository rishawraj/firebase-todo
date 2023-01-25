import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBl7_dT4vboJRH4aaUYJBo7U_mFbglspvw",
  authDomain: "todo-app-84db3.firebaseapp.com",
  projectId: "todo-app-84db3",
  storageBucket: "todo-app-84db3.appspot.com",
  messagingSenderId: "554623523373",
  appId: "1:554623523373:web:9b1dcf84eaa9d1775d36a4",
});

export default app;
