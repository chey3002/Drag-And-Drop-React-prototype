import firebase from "firebase";
import "firebase/firestore";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAQBDKR29lxDSppMLkjcK0gm-3NXLsjxcg",
  authDomain: "blogcec-9a304.firebaseapp.com",
  projectId: "blogcec-9a304",
  storageBucket: "blogcec-9a304.appspot.com",
  messagingSenderId: "990624964933",
  appId: "1:990624964933:web:26e18cade5f657bd509e2c",
};
const initialized = firebase.initializeApp(firebaseConfig);
const fire = initialized.firestore();
const storage = initialized.storage();
export  { fire, storage ,initialized};
