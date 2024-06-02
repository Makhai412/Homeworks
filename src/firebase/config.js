import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBaRcRMqnQWv0HVTpWH_glCjukd_MSJR0c",
  authDomain: "pruebafirebase-50ae0.firebaseapp.com",
  projectId: "pruebafirebase-50ae0",
  storageBucket: "pruebafirebase-50ae0.appspot.com",
  messagingSenderId: "784176516105",
  appId: "1:784176516105:web:9819d9d84efab95d6a7cd8",
  measurementId: "G-LGVL1M6BTQ"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const firebaseStorage = getStorage(firebaseApp);
const db = getFirestore(firebaseApp);

export { firebaseApp, auth, firebaseStorage, db };