import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDBcFVjohZ71CzVMwsE4YyGrMFT8EF6XAs",
  authDomain: "linkedin-clone-53098.firebaseapp.com",
  projectId: "linkedin-clone-53098",
  storageBucket: "linkedin-clone-53098.appspot.com",
  messagingSenderId: "1040557293623",
  appId: "1:1040557293623:web:7ca647ff08f6425e95ffb2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
