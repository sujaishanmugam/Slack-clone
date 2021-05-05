import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCv4inzh25qLFcINTFoDc5W14MJJlJ_8jQ",
  authDomain: "slack-clone-a29cb.firebaseapp.com",
  projectId: "slack-clone-a29cb",
  storageBucket: "slack-clone-a29cb.appspot.com",
  messagingSenderId: "632023397436",
  appId: "1:632023397436:web:8b034c8bd369423d967f39",
  measurementId: "G-5H5KNEGY7S",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider(); 

export {db, auth, provider};
export default db;