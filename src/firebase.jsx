import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// const app = firebase.initializeApp({
//   apiKey: "AIzaSyBl7_dT4vboJRH4aaUYJBo7U_mFbglspvw",
//   authDomain: "todo-app-84db3.firebaseapp.com",
//   projectId: "todo-app-84db3",
//   storageBucket: "todo-app-84db3.appspot.com",
//   messagingSenderId: "554623523373",
//   appId: "1:554623523373:web:9b1dcf84eaa9d1775d36a4",
// });
const app = firebase.initializeApp({
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  stoargeBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
});

export default app;
